const express = require("express");
const router = express.Router();
const {
  getAllInterviewsForAGivenDay,
  createNewInterview,
  updateInterview,
  deleteInterview,
} = require("../controller/InterviewsController");

router.get("/:day_id", getAllInterviewsForAGivenDay);
router.post("/", createNewInterview);
router.put("/:interview_id", updateInterview);
router.delete("/:interview_id", deleteInterview);

module.exports = router;
