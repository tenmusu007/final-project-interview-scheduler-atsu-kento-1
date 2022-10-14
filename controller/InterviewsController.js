const { Pool } = require("pg");

const getAllInterviewsForAGivenDay = (req, res) => {
  const { day_id } = req.body;
  const pool = new Pool({
    name: process.env.NAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  });
  pool
    .query(
      `SELECT * FROM interviews JOIN appointments ON interviews.appointment_id = appointments.id WHERE appointments.day_id = ${day_id}`
    )
    .then((res) => res.row)
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
      "INSERT INTO interviews (student,interviewer_id,appointment_id) VALUES ($1,$2,$3) RETURNING *",
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
      `UPDATE interviews SET student = ${student}, interviewer_id = ${interviewer_id}, appointment_id = ${appointment_id}`
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => pool.end());
};

const deleteInterview = (req, res) => {
  const { interview_id } = req.body;
  const pool = new Pool({
    name: process.env.NAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  });
  pool
    .query(`DELETE * FROM interviews WHERE interviews.id = ${interview_id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => pool.end());
};

module.exports = {
  getAllInterviewsForAGivenDay,
  createNewInterview,
  updateInterview,
  deleteInterview,
};
