const { Pool } = require("pg");
require("dotenv").config();

const getDay = (req, res) => {
	console.log(process.env.NAME);
  const pool = new Pool({
		user: process.env.NAME,
		host: process.env.HOST,
		database: process.env.DATABASE,
		password: process.env.PASSWORD,
		port: process.env.PORT,
	});
	const query =
		"SELECT day.day_id as id,day.name, count(appointment.*) as appointments, count(interviews.*) as interviews FROM appointment LEFT JOIN day ON day.day_id = appointment.day_id LEFT JOIN interviews ON interviews.appointment_id = appointment.id GROUP BY day.day_id ORDER BY day.day_id;";
  pool
		.query(query)
		.then((dbRes) => {
			const sortedObj = Object.fromEntries(
				dbRes.rows.map((obj) => [
					obj.name,
					{
						id: obj.id,
						name: obj.name,
						spots: Number(obj.appointments) - Number(obj.interviews),
					},
				])
			);
			res.json(sortedObj);
		})
		// .then((day) => {;console.log(day);})
		.catch((err) => {
			console.log("err", err);
		})
		.finally(() => {
			pool.end();
		});
}

module.exports = { getDay };
