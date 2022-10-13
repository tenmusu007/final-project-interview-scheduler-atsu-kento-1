const express = require("express");
const app = express();
const port = 8000;
const queryDb = require("./config/db");

console.log(queryDb);

app.listen(port, () => console.log(`Server is running on port ${port}`));
