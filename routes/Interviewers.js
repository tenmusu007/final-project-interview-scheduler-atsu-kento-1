const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

router.get("/", (req, res) => {
  const pool = new Pool({
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
  pool
    .query("SELECT * FROM interviewers")
    .then((result) => result.rows)
    .then((interviewers) => res.json(interviewers))
    .catch((err) => console.log(err))
    .finally(() => pool.end());
});

module.exports = router;
