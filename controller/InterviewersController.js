const getAllInterviewers = (req, res) => {
  const pool = new Pool({
    name: process.env.NAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  });
  pool
    .query("SELECT * FROM interviewers")
    .then((result) => result.rows)
    .then((interviewers) => res.json(interviewers))
    .catch((err) => console.log(err))
    .finally(() => pool.end());
};

module.exports = { getAllInterviewers };
