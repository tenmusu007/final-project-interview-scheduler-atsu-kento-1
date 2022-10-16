import React, { useEffect, useState } from "react";

import "./App.scss";
import DayList from "./components/DayList";
import Appointment from "./components/Appointment";
import axios from "axios";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export default function Application() {
  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState({});
  const [appointments, setAppointments] = useState({});
  const getDataFromDB = async () => {
    const res = await fetch(`/interviews/test/${day}`);
    const data = await res.json();
    const response = await fetch(`/interviews/${day}`);
    const interviews = await response.json();
    const obj = {};
    if (interviews.length === 0) {
      for (let i = 0; i < data.length; i++) {
        obj[data[i].appointment_id] = {
          id: data[i].appointment_id,
          time: data[i].time,
        };
      }
    } else {
      for (let i = 0; i < interviews.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (data[j].appointment_id === interviews[i].appointment_id) {
            obj[data[j].appointment_id] = {
              id: data[j].appointment_id,
              time: data[j].time,
              interview: {
                student: interviews[i].student,
                interviewer: {
                  id: interviews[i].interviewer_id,
                  name: interviews[i].interviewer_name,
                  avatar: interviews[i].avatar,
                },
              },
            };
          } else {
            if (obj[data[j].appointment_id] === undefined) {
              obj[data[j].appointment_id] = {
                id: data[j].appointment_id,
                time: data[j].time,
              };
            }
          }
        }
      }
    }
    setAppointments(obj);
  };
  const getData = async () => {
    await axios.get("/day").then((res) => setDays(res.data));
    await axios.get("/day").then((res) => console.log(res.data));

  };
  useEffect(() => {
    getDataFromDB();
    getData();
  }, [day]);
  socket.on("received_appointments", (data) => {
    getDataFromDB();
    getData();
  });
  async function bookInterview(id, interview) {
    console.log(id, interview);
    const isEdit = appointments[id].interview;
    setAppointments((prev) => {
      const appointment = {
        ...prev[id],
        interview: { ...interview },
      };
      const appointments = {
        ...prev,
        [id]: appointment,
      };
      return appointments;
    });
    const interviewObj = {
      student: interview.student,
      interviewer_id: interview.interviewer.id,
      appointment_id: id,
    };
    if (isEdit) {
      await fetch(`/interviews/${interview.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(interviewObj),
      });
    }
    if (!isEdit) {
      await fetch(`/interviews/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(interviewObj),
      });
      setDays((prev) => {
        const updatedDay = {
          ...prev[day],
          spots: prev[day].spots - 1,
        };
        const days = {
          ...prev,
          [day]: updatedDay,
        };
        return days;
      });
    }
    socket.emit("change_appointments", { appointments });
  }
  async function cancelInterview(id) {
    setAppointments((prev) => {
      const updatedAppointment = {
        ...prev[id],
        interview: null,
      };
      const appointments = {
        ...prev,
        [id]: updatedAppointment,
      };
      return appointments;
    });
    setDays((prev) => {
      const updatedDay = {
        ...prev[day],
        spots: prev[day].spots + 1,
      };
      const days = {
        ...prev,
        [day]: updatedDay,
      };
      return days;
    });
    socket.emit("change_appointments", { appointments });
    await fetch(`/interviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={days} value={day} onChange={setDay} />
        </nav>
      </section>
      <section className="schedule">
        {Object.values(appointments).map((appointment) => (
          <Appointment
            key={appointment.id}
            {...appointment}
            bookInterview={(interview) =>
              bookInterview(appointment.id, interview)
            }
            cancelInterview={cancelInterview}
          />
        ))}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
