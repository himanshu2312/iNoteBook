import express from "express"
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import { validationResult } from "express-validator";

export const login = async (req, res) => {
      try {
            // checking validation errors
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

            // comapring password entered to correct password
            const correctPassword = bcrypt.compare(password, existingUser.password)

            // cheking for the correct password
            if (!correctPassword) {
                  return res.status(400).json({ sucess: false, message: "Wrong Password, try again!!" });
            }

            // creating a User-token
            const token = jwt.sign({ user:existingUser }, "himanshu@iNotebook");

            // trying to decode the token
            // jwt.verify(token, 'himanshu@iNotebook', function (err, decoded) {
            //       if (decoded) { console.log(decoded.user) }
            //       else {
            //             console.log(err)
            //       }
            // });

            // sending response as User-token
            res.send({ sucess: true, token: token })

      }
      catch (e) {
            console.log(e);
            res.status(500).json({ sucess: false, message: "Internal Serval Error(ISE) occured" });
      }
}

export const signup = async (req, res) => {
      try {
            // checking validation errors
            const result = validationResult(req);
            if (!result.isEmpty()) {
                  return res.status(400).json({ sucess: false, message: "errors", errors: result.errors })
            }

            // checking wether user already exits or not
            const { name, email, password } = req.body;
            const existingUser = await User.findOne({ email })
            if (existingUser) {
                  return res.status(404).json({ sucess: false, message: "User already exits with this email" });
            }

            // creating a new salt to encrypt user's password
            const salt = await bcrypt.genSalt(8);
            console.log("salt", salt)

            // encrypting user's password using created salt
            const hashedPassword = await bcrypt.hash(password, salt);
            console.log("encrypted password", hashedPassword)

            // creating a new user if succefully created save in a var or error otherwise
            var newUser = null;
            User.create({ name, email, password: hashedPassword })
                  .then((user => { newUser = user }))
                  .catch(e => res.status(400).json({ sucess: false, message: "error", error: e.message }));

            // creating a new User-token
            const token = jwt.sign({ user:newUser }, "himanshu@iNotebook");
            res.send({ sucess: true, token: token })
      }
      catch (e) {
            console.log(e);
            res.status(500).json({ sucess: false, message: "Internal Serval Error(ISE) occured" });
      }
}