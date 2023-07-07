const express = require("express");
require('dotenv').config();
const connectDB = require("./middleware/db");
const app = express();
const port = process.env.PORT || 8080;


connectDB();

app.get("/", (req, res) => {
  res.send("Ken KAAJ KORTESE NA 🤧");
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


//js
//BodyParsing
app.use(express.urlencoded({extended: false}));

const server = app.listen(port, () => {
  console.log(`Server is running`);
});

module.exports = {
  app,
  server,
};
