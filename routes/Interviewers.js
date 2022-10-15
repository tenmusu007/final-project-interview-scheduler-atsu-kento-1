const express = require("express");
const router = express.Router();
const { getAllInterviewers } = require("../controller/InterviewersController");

router.get("/", getAllInterviewers);

module.exports = router;
