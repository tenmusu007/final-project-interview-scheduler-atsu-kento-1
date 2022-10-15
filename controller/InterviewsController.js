const { Pool } = require("pg");

const getTest = (req, res) => {
  const { day } = req.params;
  console.log(day);
  const pool = new Pool({
    name: process.env.NAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  });
  pool
    .query(
      `SELECT appointment.id as appointment_id,appointment.time as time FROM appointment JOIN day ON appointment.day_id = day.day_id WHERE day.name = '${day}'`
    )
    .then((res) => res.rows)
    .then((appointments) => res.json(appointments))
    .catch((err) => console.log(err))
    .finally(() => pool.end());
};

const getAllInterviewsForAGivenDay = (req, res) => {
  const { day } = req.params;
  const pool = new Pool({
    name: process.env.NAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  });
  pool
    .query(
      `SELECT interviews.appointment_id as appointment_id, interviews.student,interviewers.id as interviewer_id,interviewers.name as interviewer_name,interviewers.avatar FROM interviews JOIN appointment ON interviews.appointment_id = appointment.id JOIN day ON appointment.day_id = day.day_id JOIN interviewers ON interviews.interviewer_id = interviewers.id WHERE day.name = '${day}'`
    )
    .then((res) => res.rows)
    .then((interviews) => res.json(interviews))
    .catch((err) => console.log(err))
    .finally(() => pool.end());
};

const createNewInterview = (req, res) => {
  console.log(req.body);
  const { student, interviewer_id, appointment_id } = req.body;
  const pool = new Pool({
    name: process.env.NAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  });
  pool
    .query(
      `INSERT INTO interviews (student,interviewer_id,appointment_id) VALUES ($1,$2,$3) RETURNING *`,
      [student, interviewer_id, appointment_id]
    )
    .then((result) => result)
    .then((interview) => res.json(interview))
    .catch((err) => console.log(err))
    .finally(() => pool.end());
};

const updateInterview = (req, res) => {
  const { student, interviewer_id, appointment_id } = req.body;
  const pool = new Pool({
    name: process.env.NAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  });
  pool
    .query(
      `UPDATE interviews SET student = '${student}', interviewer_id = ${interviewer_id}, appointment_id = ${appointment_id} WHERE interviews.appointment_id = ${appointment_id}`
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => pool.end());
};

const deleteInterview = (req, res) => {
  const { appointment_id } = req.params;
  console.log(appointment_id);
  const pool = new Pool({
    name: process.env.NAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  });
  pool
    .query(
      `DELETE FROM interviews WHERE interviews.appointment_id = ${appointment_id}`
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => pool.end());
};

module.exports = {
  getTest,
  getAllInterviewsForAGivenDay,
  createNewInterview,
  updateInterview,
  deleteInterview,
};
