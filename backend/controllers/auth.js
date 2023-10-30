import express from "express"
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import { validationResult } from "express-validator";

// declaring secrete key 
const key = process.env.KEY;

// User Login EndPoint i.e. "api/auth/login"
export const login = async (req, res) => {
      try {
            // checking validation errors
            const result = validationResult(req);
            if (!result.isEmpty()) {
                  return res.status(400).json({ success: false, message: "errors", errors: result.errors })
            }

            //checking wether user already exits or not
            const { email, password } = req.body;
            const existingUser = await User.findOne({ email })
            if (!existingUser) {
                  return res.status(404).json({ success: false, message: "User not exits, Please signup!!" });
            }

            // comapring password entered to correct password
            const correctPassword = await bcrypt.compare(password, existingUser.password)

            // cheking for the correct password
            if (!correctPassword) {
                  return res.status(400).json({ success: false, message: "Wrong Password, try again!!" });
            }

            // creating a User-token with data as UserId
            const token = jwt.sign({ userId: existingUser._id }, key);

            // sending response as User-token
            res.send({ success: true, token: token })

      }
      catch (e) {
            console.log(e);
            res.status(500).json({ success: false, message: "Internal Serval Error(ISE) occured" });
      }
}

// User Sigup EndPoint i.e. "api/auth/signup"
export const signup = async (req, res) => {
      try {
            // checking validation errors
            const result = validationResult(req);
            if (!result.isEmpty()) {
                  return res.status(400).json({ success: false, message: "errors", errors: result.errors })
            }

            // checking wether user already exits or not
            const { name, email, password } = req.body;
            const existingUser = await User.findOne({ email })
            if (existingUser) {
                  return res.status(404).json({ success: false, message: "User already exits with this email" });
            }

            // creating a new salt to encrypt user's password
            const salt = await bcrypt.genSalt(8);
            // console.log("salt", salt)

            // encrypting user's password using created salt
            const hashedPassword = await bcrypt.hash(password, salt);
            // console.log("encrypted password", hashedPassword)

            // creating a new user if succefully created save in a var or error otherwise
            var newUserId = null;
            await User.create({ name, email, password: hashedPassword })
                  .then((user => { newUserId = user._id }))
                  .catch(e => res.status(400).json({ success: false, message: "error", error: e.message }));

            // creating a new User-token as UserId
            const token = jwt.sign({ userId: newUserId }, key);

            // sending response as User-token
            res.send({ success: true, token: token })
      }
      catch (e) {
            console.log(e);
            res.status(500).json({ success: false, message: "Internal Serval Error(ISE) occured" });
      }
}

// User details EndPoint i.e. "api/auth/getUser"
export const getUser = async (req, res) => {
      try {
            // getting userId from req body
            const userId = req.userId

            // getting user details exept password field
            const user = await User.findById(userId).select("-password");

            // sending response as userData
            res.status(200).json({ success: true, user: user });
      }
      catch (e) {
            console.log(e);
            res.status(500).json({ success: false, message: "Internal Serval Error(ISE) occured" });
      }
}