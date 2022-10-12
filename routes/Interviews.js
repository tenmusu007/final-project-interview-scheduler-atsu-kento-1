const express = require("express");
const router = express.Router();

router.get("/:day", (req, res) => {
  const { day } = req.body;
  res.json({ msg: "Interviews" });
});

module.exports = router;
