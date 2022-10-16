const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const cors = require("cors");
const { Server } = require("socket.io");
const port = 8000;
const appoitmentRoute = require("./routes/appointment");
const dayRoute = require("./routes/day");
const interviewersRoute = require("./routes/Interviewers");
const interviewsRoute = require("./routes/Interviews");
require("dotenv").config();
app.use(cors());
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("Connected");
  socket.on("send_appointments", (data) => {
    socket.broadcast.emit("received_appointments", data);
  });
  socket.on("change_appointments", (data) => {
    socket.broadcast.emit("received_appointments", data);
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", appoitmentRoute);
app.use("/", dayRoute);
app.use("/interviewers", interviewersRoute);
app.use("/interviews", interviewsRoute);

app.listen(port, () => console.log(`Server is running on port ${port}`));
server.listen(3001, () => {
  console.log(`[server] server is running on port 3001`);
});
