const getAllAvailableInterviewersForAGivenDay = (req, res) => {
  const { day_id } = req.body;
  res.json({ msg: "Available" });
};

module.exports = { getAllAvailableInterviewersForAGivenDay };
