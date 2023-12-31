// models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: false },
    name: { type: String, required: true },
  },
  { collection: "User" }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
