const { Pool } = require("pg");
require("dotenv").config();
const fs = require("fs");
// console.log(process.env.ATSUYA);
const pool = new Pool({
	user: process.env.NAME,
	host: process.env.HOST,
	database: process.env.DATABASE,
	password: process.env.PASSWORD,
	port: process.env.PORT,
});
// console.log("pool", pool);



// const pool = new Pool({
// 	user: "postgres",
// 	host: "localhost",
// 	database: "nodefinal",
// 	password: "atsu0301",
// 	port: 5432,
// });
// const queryDb = async () => {
// 	const pool = new Pool({
// 		user: process.env.USERNAME,
// 		host: process.env.HOST,
// 		database: process.env.DATABASE,
// 		password: process.env.PASSWORD,
// 		port: process.env.PORT,
// 	});
// };

module.exports = { pool };
