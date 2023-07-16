// utils/emailSender.js
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const path = require("path");
const fs = require("fs");

async function sendSignupEmail(data) {
  console.log("data", data);
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abdulraheem9909@gmail.com",
      pass: "ryflvpyukcywlebx",
    },
  });

  // Read the email template
  const templatePath = path.join(__dirname, "../utils/welcomEmail.hbs");
  const emailTemplate = fs.readFileSync(templatePath, "utf-8");

  // Compile the Handlebars template
  const compiledTemplate = handlebars.compile(emailTemplate);

  // Define email options
  const mailOptions = {
    from: "abdulraheem9909@gmail.com",
    to: data?.email,
    subject: "Signup Confirmation | assessment",
    html: compiledTemplate({
      name: data?.name,
      email: data.email,
      password: data.password,
    }),
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("failed to send signup email", error);
  }
}

module.exports = { sendSignupEmail };
