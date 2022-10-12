const express = require("express");
const router = express.Router();

router.get("/:day", (req, res) => {
  const { day } = req.body;
  res.json({ msg: "Interviews" });
});

// create a new interview
router.post("/", (req, res) => {
  const { student, interviewer_id, appointment_id } = req.body;
  const pool = new Pool({
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
  pool
    .query(
      "INSERT INTO interviews (student,interviewer_id, appointment_id) VALUES ($1 $2 $3) RETURNING *",
      [student, interviewer_id, appointment_id]
    )
    .then((result) => result.row[0])
    .then((interview) => res.json(interview))
    .catch((err) => console.log(err))
    .finally(() => pool.end());
});
// update an interview
router.put("/:id", (req, res) => {
  const pool = new Pool({
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
  pool
    .query()
    .then()
    .catch((err) => console.log(err))
    .finally(() => pool.end());
});
// delete an interview
router.delete("/:id", (req, res) => {
  const pool = new Pool({
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
  pool
    .query()
    .then()
    .catch((err) => console.log(err))
    .finally(() => pool.end());
});

module.exports = router;