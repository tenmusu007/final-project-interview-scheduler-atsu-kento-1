const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = 8000;
const appoitmentRoute = require("./routes/appointment");
const interviewersRoute = require("./routes/Interviewers");
const interviewsRoute = require("./routes/Interviews");

// io.on("connection", (socket) => {
//   const { username, room } = socket.handshake.query;
//   socket.join(username);
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", appoitmentRoute);
app.use("/interviewers", interviewersRoute);
app.use("/interviews", interviewsRoute);

app.listen(port, () => console.log(`Server is running on port ${port}`));
