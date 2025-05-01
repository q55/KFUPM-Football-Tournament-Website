const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "your_database_name",
});

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(3001, () => {
  console.log("Backend running on port 3001");
});
