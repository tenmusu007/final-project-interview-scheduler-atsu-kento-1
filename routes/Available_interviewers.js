const express = require("express");
const router = express.Router();
const {
  getAllAvailableInterviewersForAGivenDay,
} = require("../controller/AvailableInterviewersController");

router.get("/:day_id", getAllAvailableInterviewersForAGivenDay);

module.exports = router;
