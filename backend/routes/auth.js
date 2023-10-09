import express from "express"
import User from "../models/User.js"
const authRouter = express.Router();

const login = (req, res) => {
      const user= User(req.body)
      user.save();
      res.send(user)
}

const signup = (req, res) => {
      res.send("Signup")
}

authRouter.post("/login", login);
authRouter.post("/signup", signup);

export default authRouter;