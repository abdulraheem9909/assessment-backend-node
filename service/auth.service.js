const config = require("../config");
const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateRandomPassword } = require("../utils/helper");

exports.login = async (email, password) => {
  // Check if the user exists
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Compare the hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  // Generate JWT token
  const access_token = jwt.sign({ userId: user._id }, config.secretKey, {
    expiresIn: "5d",
  });
  const data = {
    email: user?.email,
    name: user?.name,
  };
  return { access_token, data };
};
exports.signup = async (email, name) => {
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error("Email already exists");
    }
    const passwordGenerated = generateRandomPassword(10);
    const hashedPassword = await bcrypt.hash(passwordGenerated, 10);

    // Create a new user and save to the database
    const newUser = new UserModel({ email, name, password: hashedPassword });
    await newUser.save();
    return { email, name, password: passwordGenerated };
  } catch (error) {
    throw new Error("Failed to signup");
  }
};
exports.findByEmail = async (email) => {
  return await UserModel.findOne({ email });
};

exports.deleteUser = async (id) => {
  return await UserModel.findByIdAndDelete(id);
};
