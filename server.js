const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const port = 8000;
const appoitmentRoute = require("./routes/appointment");
const dayRoute =require("./routes/day")
const interviewersRoute = require("./routes/Interviewers");
const interviewsRoute = require("./routes/Interviews");

// app.use(cors());
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });
// io.on("connection", (socket) => {
//   //   socket.on("join_room", (data) => {
//   //     socket.join(data);
//   //   });
//   socket.on("send_interview", (data) => {
//     // I need to fix this code
//     socket.broadcast.emit("receive_interview", data);
//   });
// });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", appoitmentRoute);
app.use("/", dayRoute);
app.use("/interviewers", interviewersRoute);
app.use("/interviews", interviewsRoute);

app.listen(port, () => console.log(`Server is running on port ${port}`));
