const express = require("express");
const router = express.Router();
const { Pool } = require("pg");
const { getAllInterviewers } = require("../controller/InterviewersController");

router.get("/", getAllInterviewers);

module.exports = router;
