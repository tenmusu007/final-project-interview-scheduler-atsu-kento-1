// const { Pool } = require("pg");
// require("dotenv").config();

// const getAppointment = (req,res) => {
// 	const pool = new Pool({
// 		user: process.env.NAME,
// 		host: process.env.HOST,
// 		database: process.env.DATABASE,
// 		password: process.env.PASSWORD,
// 		port: process.env.PORT,
// 	});
// 	pool
// 		.query("SELECT * FROM appointment")
// 		.then((dbRes) => res.json(dbRes.rows))
// 		.then((appo) => {
// 			// console.log(appo);
// 		})
// 		.catch((err) => {
// 			console.log("err", err);
// 		})
// 		.finally(() => {
// 			pool.end();
// 		});
// };

// module.exports = { getAppointment };
