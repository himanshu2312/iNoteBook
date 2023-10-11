import express from "express"
import { body } from "express-validator";
import {login,signup} from "../controllers/auth.js"

//creating a express router as authentication
const authRouter = express.Router();

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