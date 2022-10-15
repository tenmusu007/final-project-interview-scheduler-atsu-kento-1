const router = require("express").Router();
// import queryDb from "../config/db";
// const { pool } = require("../config/db");
const { Pool } = require("pg");
require("dotenv").config();
// console.log("apo", pool);
const {getAppointment}= require("../controller/appointment")
router.get("/appointment", getAppointment);
module.exports = router;
