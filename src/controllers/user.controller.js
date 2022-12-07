import User from "../models/User";
import config from "../config";

// USER TASKS

export const loginUser = async (req, res) => {
  const { user, password } = req.body;

  const data = await User.findOne({ user: user }).select("+password");

  if (!data)
    return res.status(400).json({ error: "No se pudo encontrar el usuario." });
  const matchPass = await User.comparePassword(password, data.password);
  console.log(matchPass, password, data.password);
  res.status(200).json(data);
};

export const registerUsers = async (req, res) => {
  const newUser = new User({
    user: req.body.user,
    name: req.body.name,
    email: req.body.email,
    password: await User.encryptPassword(req.body.password),
  });
  await newUser.save();
  res.status(201).json({ message: "Usuario registrado con exito." });
};
