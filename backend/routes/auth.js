import express from "express"
import User from "../models/User.js"
import { body, validationResult } from "express-validator";

//creating a express router as authentication
const authRouter = express.Router();

const login = async (req, res) => {
      try {
            //checking validation errors
            const result = validationResult(req);
            if (!result.isEmpty()) {
                  return res.status(400).json({ sucess: false, message: "errors", errors: result.errors })
            }

            //checking wether user already exits or not
            const { email, password } = req.body;
            const existingUser = await User.findOne({ email })
            if (!existingUser) {
                  return res.status(404).json({ sucess: false, message: "User not exits, Please signup!!" });
            }

            //cheking for the correct password
            if (existingUser.password !== password) {
                  return res.status(400).json({ sucess: false, message: "Wrong Password, try again!!" });
            }

            //sending response as UserData
            res.send({ sucess: true, data: existingUser })
      }
      catch (e) {
            console.log(e);
            res.status(500).json({ sucess: false, message: "Internal Serval Error(ISE) occured" });
      }
}

const signup = async (req, res) => {
      try {
            //checking validation errors
            const result = validationResult(req);
            if (!result.isEmpty()) {
                  return res.status(400).json({ sucess: false, message: "errors", errors: result.errors })
            }

            //checking wether user already exits or not
            const { name, email, password } = req.body;
            const existingUser = await User.findOne({ email })
            if (existingUser) {
                  return res.status(404).json({ sucess: false, message: "User already exits with this email" });
            }

            //creating a new user then return UserData as response if succefully creted or error otherwise
            User.create(
                  req.body
            ).then(user => res.send(user))
                  .catch(e => res.status(400).json({ sucess: false, message: "error", error: e.message }))
      }
      catch (e) {
            console.log(e);
            res.status(500).json({ sucess: false, message: "Internal Serval Error(ISE) occured" });
      }
}

//Request: post "authRouter/login" - "api/auth/login"
authRouter.post("/login", [
      //applying express-validator as middleware
      body('name', "Enter a valid name!!").isLength({ min: 3 }),
      body('email', "Enter a valid Email!!").isEmail(),
      body('password', "Password must contain alteast 4 characters!!").isLength({ min: 4 }),
], login);

//Request: post "authRouter/signup" - "api/auth/sigup"
authRouter.post("/signup", [
      //applying express-validator as middleware
      body('name', "Enter a valid name!!").isLength({ min: 3 }),
      body('email', "Enter a valid Email!!").isEmail(),
      body('password', "Password must contain alteast 4 characters!!").isLength({ min: 4 }),
], signup);

//export "authRouther" or "'api/auth's Router"
export default authRouter;