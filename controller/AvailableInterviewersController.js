// const { Pool } = require("pg");

// const getAllAvailableInterviewersForAGivenDay = (req, res) => {
//   const { day_id } = req.body;
//   const pool = new Pool({
// 		user: "postgres",
// 		host: "localhost",
// 		database: "nodefinal",
// 		password: "atsu0301",
// 		port: 5432,
// 	});
//   pool
//     .query(
//       `SELECT * FROM available_interviewers JOIN interviewers ON available_interviewers.interviewer_id = interviewers.id JOIN interviews ON interviewers.id = interviews.interviewer_id GROUP BY available_interviewers.interviewer_id`
//     )
//     .then()
//     .then()
//     .catch((err) => console.log(err))
//     .finally(() => pool.end());
// };

// module.exports = { getAllAvailableInterviewersForAGivenDay };
