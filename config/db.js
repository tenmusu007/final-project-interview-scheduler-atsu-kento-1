const { Pool } = require("pg");
const fs = require("fs");

const queryDb = async () => {
  const pool = new Pool({
		user: process.env.USERNAME,
		host: process.env.HOST,
		database: process.env.DATABASE,
		password: process.env.PASSWORD,
		port: process.env.PORT,
	});
};

module.exports = { queryDb };
