import React, { useEffect, useState } from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Confirm from "./Confirm";
import getAllInterviewers from "../../helper/getAllInterviewers";

import "./styles.scss";

const Appointment = (props) => {
  const [interviewers, setInterviewers] = useState([]);
  const [add, setAdd] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    setEdit(false);
    props.bookInterview(interview);
  }
  useEffect(() => {
    async function fetchData() {
      // I need to fix this part?
      const allInterviewers = await getAllInterviewers();
      setInterviewers(allInterviewers);
    }
    fetchData();
  }, []);
  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? (
        isDeleting ? (
          <Confirm
            message={"Are you sure you want to delete?"}
            onCancel={() => setIsDeleting(false)}
            onConfirm={() => {
              props.cancelInterview(props.id);
              setIsDeleting(false);
            }}
          />
        ) : edit ? (
          <Form
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            interviewers={interviewers}
            onSave={save}
            onCancel={() => setEdit(false)}
          />
        ) : (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            interviewers={interviewers}
            onEdit={() => setEdit(true)}
            onDelete={() => setIsDeleting(true)}
          />
        )
      ) : add ? (
        <Form
          interviewers={interviewers}
          onSave={save}
          onCancel={() => setAdd(false)}
        />
      ) : (
        <Empty onAdd={() => setAdd(true)} />
      )}
    </article>
  );
};

export default Appointment;
