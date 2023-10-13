import express from "express"
import { body } from "express-validator";
import auth from "../middlewares/auth.js";
import { addNote, fetchNotes } from "../controllers/notes.js";

// creating a express router as notesRouter
const notesRouter = express.Router();

// Request: post "notesRouter/add" - "api/notes/add"
notesRouter.post("/add",
      //applying customised auth middleware
      auth
      , [
            //applying express-validator as middleware
            body('title', "Enter a valid title!!").isLength({ min: 3 }),
            body('desc', "Description must contain alteast 5 characters!!").isLength({ min: 5 }),
      ], addNote);

// Request: get "notesRouter/get" - "api/notes/get"
notesRouter.get("/get",
      //applying customised auth middleware
      auth
      , fetchNotes);

//export "notesRouther" or "'api/notes's Router"
export default notesRouter;