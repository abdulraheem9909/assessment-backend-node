const authService = require("../service/auth.service");
const emailSender = require("../utils/signupEmail");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await authService.login(email, password);
    res.json({
      data: user.data,
      status: "success",
      access_token: user?.access_token,
    });
  } catch (err) {
    console.log("err",err);
    res.status(400).json({ error: err.message });
  }
};
exports.signup = async (req, res) => {
  const { email, name } = req.body;
  try {
    const user = await authService.signup(email, name);
    await emailSender.sendSignupEmail(user);
    res.json({ data: "Email Send Successfully", status: "success" });
  } catch (err) {
    // const user = await authService.findByEmail(email);
    // if (user) {
    //   await authService.deleteUser(user.id);
    //   console.log("User creation rolled back.");
    // }
    console.log("Error sending email:", err);
    res.status(400).json({ error: err.message });
  }
};
