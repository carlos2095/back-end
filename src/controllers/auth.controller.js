const AuthServices = require("../services/auth.services");
const transporter = require("../utils/mailer");
//const bcrypt = require("bcrypt");
const register = async (req, res) => {
  try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if (result) {
      res.status(201).json({ message: "user created" });
      await transporter.sendMail({
        to: result.email,
        from: "carlos209504@gmail.com",
        subject: "Email confirmation",
        html: "<h1>Bienvenido al ecommerce</h1> <p>Tienes que confirmar tu email</p><p> Solo haz click en el siguiente <a href='#'' target='new_blank'> enlace </a>",
      });
    } else {
      res.status(400).json({ message: "somethign wrong" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({
        error: "missing data",
        message: "email is not provided",
      });
    }
    if (!password) {
      return res.status(400).json({
        error: "missing data",
        message: "password is not provided",
      });
    }
    const result = await AuthServices.login({ email, password });
    if (result.isValid) {
      const { username, id, email } = result.user;
      const userData = { username, id, email };
      const token = AuthServices.genToken(userData);
      res.json({ id, username, email, token });
    } else {
      res.status(400).json({ error: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = {
  register,
  login,
};
