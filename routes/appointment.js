const router = require("express").Router();
// import queryDb from "../config/db";
// const { pool } = require("../config/db");
const { Pool } = require("pg");
require("dotenv").config();
// console.log("apo", pool);
router.get("/appointment", (req, res) => {
  const pool = new Pool({
		user: process.env.NAME,
		host: process.env.HOST,
		database: process.env.DATABASE,
		password: process.env.PASSWORD,
		port: process.env.PORT,
	});
	pool
		.query(
			"SELECT * FROM appointment"
		)
		.then((dbRes) => res.json(dbRes.rows))
		.then((appo) => {
			// console.log(appo);
		})
		.catch((err) => {
			console.log("err", err);
		})
		.finally(() => {
			pool.end();
		});
});
router.get("/day", (req, res) => {
	const pool = new Pool({
		user: process.env.NAME,
		host: process.env.HOST,
		database: process.env.DATABASE,
		password: process.env.PASSWORD,
		port: process.env.PORT,
	});
	const query =
		"SELECT day.day_id as id,day.name, count(appointment.day_id) as spots FROM appointment JOIN day ON day.day_id = appointment.day_id GROUP BY day.name, day.day_id ORDER BY day.day_id;";
	pool
		.query(query)
		.then((dbRes) => res.json(dbRes.rows))
		.then((day) => {})
		.catch((err) => {
			console.log("err", err);
		})
		.finally(() => {
			pool.end();
		});
});
module.exports = router;
