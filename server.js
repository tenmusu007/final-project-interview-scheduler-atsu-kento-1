const express = require("express");
const app = express();
const port = 8000;
const appoitmentRoute = require("./routes/appointment");
require("dotenv").config(); 
app.use(express.json());

app.use("/", appoitmentRoute);

app.listen(port, () => console.log(`Server is running on port ${port}`));
