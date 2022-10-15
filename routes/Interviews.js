const express = require("express");
const router = express.Router();
const {
  getTest,
  getAllInterviewsForAGivenDay,
  createNewInterview,
  updateInterview,
  deleteInterview,
} = require("../controller/InterviewsController");

router.get("/test/:day", getTest);
router.get("/:day", getAllInterviewsForAGivenDay);
router.post("/new", createNewInterview);
router.put("/:interview_id", updateInterview);
router.delete("/:appointment_id", deleteInterview);

module.exports = router;
