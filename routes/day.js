const router = require("express").Router();
// import queryDb from "../config/db";
// const { pool } = require("../config/db");
const { Pool } = require("pg");
require("dotenv").config();
// console.log("apo", pool);
const { getDay } = require("../controller/day");
router.get("/day", getDay);
module.exports = router;
