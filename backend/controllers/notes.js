import Notes from "../models/Notes.js"
import { validationResult } from "express-validator";

// Notes add EndPoint i.e. "api/notes/add"
export const addNote = async (req, res) => {
      try {
            // checking validation errors
            const result = validationResult(req);
            if (!result.isEmpty()) {
                  return res.status(400).json({ sucess: false, message: "errors", errors: result.errors })
            }

            // getting userId from req body
            const userId = req.userId

            // creating a new Note if succefully created send as res or error otherwise
            const { title, desc, tag } = req.body;
            Notes.create({ userId, title, desc, tag })
                  .then(note => { res.status(200).json({ sucess: true, note: note }) })
                  .catch(e => res.status(400).json({ sucess: false, message: "error", error: e.message }));

      } catch (e) {
            console.log(e);
            res.status(500).json({ sucess: false, message: "Internal Serval Error(ISE) occured" });
      }
}

// Notes get EndPoint i.e. "api/notes/get"
export const fetchNotes = async (req, res) => {
      try {
            // getting userId from req body
            const userId = req.userId

            // fetching notes from server where notes userId match with the current userId
            const notesData = await Notes.find({ userId: userId });

            // sending response as NotesData
            res.status(200).json({ sucess: true, notes: notesData })

      } catch (e) {
            console.log(e);
            res.status(500).json({ sucess: false, message: "Internal Serval Error(ISE) occured" });
      }
}