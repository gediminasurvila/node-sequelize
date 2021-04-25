require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");
const port = process.env.PORT || 3000;

const User = require("./models/user");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sync", (req, res) => {
  User.sync();
  res.send("Synced");
});


db.authenticate().then(() => {
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}).catch(e => console.log(e));

