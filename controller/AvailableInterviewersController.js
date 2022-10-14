const { Pool } = require("pg");

const getAllAvailableInterviewersForAGivenDay = (req, res) => {
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
      `SELECT * FROM available_interviewers JOIN interviewers ON available_interviewers.interviewer_id = interviewers.id JOIN interviews ON interviewers.id = interviews.interviewer_id GROUP BY available_interviewers.interviewer_id`
    )
    .then()
    .then()
    .catch((err) => console.log(err))
    .finally(() => pool.end());
};

module.exports = { getAllAvailableInterviewersForAGivenDay };
