const { Pool } = require("pg");
const fs = require("fs");

const queryDb = async () => {
  const pool = new Pool({
    user: "postgres",
    host: "",
    database: "hondataketo",
    password: "postgres",
    port: 5432,
  });
};

module.exports = { queryDb };
