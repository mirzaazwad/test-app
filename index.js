const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });
const connectDB = require("./config/db");
const app = express();
const port = process.env.PORT || 5000;


connectDB();

app.get("/", (req, res) => {
  res.send("KAAJ KORTEse something 🤧");
});

app.get("/hello", (req, res) => {
  res.send("Bye World");
});

app.get("/nafisa", (req, res) => {
  res.send("Nafisa is successful");
});

app.set("view engine", "ejs");
//Routes
app.use("/", require("./routes/login"));

const server = app.listen(port, () => {
  console.log(`Server is running`);
});

module.exports = {
  app,
  server,
};
