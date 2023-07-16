const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 8000;
const cars = require("./routes/cars");
const categories = require("./routes/category");
const auth = require("./routes/auth");
const cors = require('cors');
const authenticateToken = require("./middleware/authMiddleware");

require("./db/conn");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/users", auth);
app.use("/cars", authenticateToken, cars);
app.use("/category", authenticateToken, categories);

app.get("/", function (req, res) {
  console.log("app starting on port: " + port);
  res.send("assessment task");
});

app.listen(port, function () {
  console.log("app listening on port: " + port);
});
