import Notes from "../models/Notes.js"
import { validationResult } from "express-validator";

// Notes add EndPoint i.e. "api/notes/add"
export const addNote = async (req, res) => {
      try {
            // checking validation errors
            const result = validationResult(req);
            if (!result.isEmpty()) {
                  return res.status(400).json({ success: false, message: "errors", errors: result.errors })
            }

            // getting userId from req body
            const userId = req.userId

            // creating a new Note if succefully created send as res or error otherwise
            const { title, desc, tag } = req.body;
            Notes.create({ userId, title, desc, tag })
                  .then(note => { res.status(200).json({ success: true, note: note }) })
                  .catch(e => res.status(400).json({ success: false, message: "error", error: e.message }));

      } catch (e) {
            console.log(e);
            res.status(500).json({ success: false, message: "Internal Serval Error(ISE) occured" });
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
            res.status(200).json({ success: true, notes: notesData })

      } catch (e) {
            console.log(e);
            res.status(500).json({ success: false, message: "Internal Serval Error(ISE) occured" });
      }
}

// Notes update EndPoint i.e. "api/notes/id"
export const updateNote = async (req, res) => {
      try {
            // extracting id of note from req parameters
            const { id } = req.params;

            // getting note from the database
            const existingNote = await Notes.findById(id);

            // if note not exits sending res: 404
            if (!existingNote) { return res.status(404).json({ success: false, message: "Note not found!!" }) }

            // cheching for user authentication
            if (existingNote.userId.toString() !== req.userId) {
                  return res.status(401).json({ success: false, message: "Asses Denied!!" })
            }

            // geting update feilds from req body
            const { title, desc, tag } = req.body

            // creating an update object
            var updateNote = {}

            // updating existing feilds in update object
            if (title) { updateNote.title = title };
            if (desc) { updateNote.desc = desc };
            if (tag) { updateNote.tag = tag };

            await Notes.findByIdAndUpdate(id, { $set: updateNote }, { new: true })
                  .then(note => { res.status(200).json({ success: true, note: note }) })
                  .catch(e => res.status(400).json({ success: false, message: "error", error: e.message }))

      } catch (e) {
            console.log(e);
            res.status(500).json({ success: false, message: "Internal Serval Error(ISE) occured" });
      }
}
// Notes delete EndPoint i.e. "api/notes/id"
export const deleteNote = async (req, res) => {
      try {
            // extracting id of note from req parameters
            const { id } = req.params;

            // getting note from the database
            const existingNote = await Notes.findById(id);

            // if note not exits sending res: 404
            if (!existingNote) { return res.status(404).json({ success: false, message: "Note not found!!" }) }

            // cheching for user authentication
            if (existingNote.userId.toString() !== req.userId) {
                  return res.status(401).json({ success: false, message: "Asses Denied!!" })
            }

            await Notes.findByIdAndDelete(id)
                  .then(res.status(200).json({ success: true, message: "Note successfuly deleted!!" }))
                  .catch(e => res.status(400).json({ success: false, message: "error", error: e.message }))

      } catch (e) {
            console.log(e);
            res.status(500).json({ success: false, message: "Internal Serval Error(ISE) occured" });
      }
}