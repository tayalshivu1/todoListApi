import bcrypt, { hash } from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const registerUser = async (req, res) => {
  console.log(req.body);
  const { email, name, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ error: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { email, name, password: hashedPassword };

  await User.create(newUser);

  res.status(201).json({
    message: "User registered",
  });
};

export const loginUser = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: "User not exists" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({ token });
};
