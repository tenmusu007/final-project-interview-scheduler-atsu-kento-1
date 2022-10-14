import React, { useEffect, useState } from "react";

import "./App.scss";
import DayList from "./components/DayList";
import Appointment from "./components/Appointment";
// import daysData from "./components/__mocks__/days.json";
// import appointmentsData from "./components/__mocks__/appointments.json";
import axios from "axios";
export default function Application() {
  useEffect(() => {
    const getApo = async () => {
      axios.get("/appointment").then((res) => setAppointments(res.data));
      // axios.get("/appointment").then((res) => console.log("appo",res));
    };
    const getData = async () => {
      axios.get("/day").then((res) => setDays(res.data));
      // axios.get("/day").then((res) => console.log(res));
    };
    getApo();
    getData();
  }, []);
  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState({});
  const [appointments, setAppointments] = useState({});
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
    const res = await fetch(`/interviews/${id}`, {
      method: "DELETE",
    });
    console.log(res);
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
