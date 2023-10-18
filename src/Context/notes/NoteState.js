import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
      // sample notes data ultil we implemented API calls
      const initialNotes = [
            {
                  "_id": "652a6a151dbe24e7cd3a94f4",
                  "userId": "6527c6bfc6565c3a97964c03",
                  "title": "titile2",
                  "desc": "sample description2",
                  "tag": "sample2",
                  "date": "2023-10-14T10:14:45.862Z",
                  "__v": 0
            },
            {
                  "_id": "652bcd92e052aaa3fa6583c9",
                  "userId": "6527c6bfc6565c3a97964c03",
                  "title": "title up",
                  "desc": "Des new",
                  "tag": "test",
                  "date": "2023-10-15T11:31:30.327Z",
                  "__v": 0
            },
            {
                  "_id": "652bcd92e052aaa3fa6583c9",
                  "userId": "6527c6bfc6565c3a97964c03",
                  "title": "title up",
                  "desc": "Des new",
                  "tag": "test",
                  "date": "2023-10-15T11:31:30.327Z",
                  "__v": 0
            },
            {
                  "_id": "652bcd92e052aaa3fa6583c9",
                  "userId": "6527c6bfc6565c3a97964c03",
                  "title": "title up",
                  "desc": "Des new",
                  "tag": "test",
                  "date": "2023-10-15T11:31:30.327Z",
                  "__v": 0
            },
            {
                  "_id": "652bcd92e052aaa3fa6583c9",
                  "userId": "6527c6bfc6565c3a97964c03",
                  "title": "title up",
                  "desc": "Des new",
                  "tag": "test",
                  "date": "2023-10-15T11:31:30.327Z",
                  "__v": 0
            },
            {
                  "_id": "652bcd92e052aaa3fa6583c9",
                  "userId": "6527c6bfc6565c3a97964c03",
                  "title": "title up",
                  "desc": "Des new",
                  "tag": "test",
                  "date": "2023-10-15T11:31:30.327Z",
                  "__v": 0
            },
            {
                  "_id": "652bcd92e052aaa3fa6583c9",
                  "userId": "6527c6bfc6565c3a97964c03",
                  "title": "title up",
                  "desc": "Des new",
                  "tag": "test",
                  "date": "2023-10-15T11:31:30.327Z",
                  "__v": 0
            }
      ]

      // defining app state variable
      const [notes, setNotes] = useState(initialNotes);
      const [alert, setAlert] = useState(null);
      const [userToken, setUserToken] = useState(null);

      // Add note method
      // requires User token inside header
      const addNote = async (noteData) => {
            // add token in header
            // call api with body as noteData and get result

            //push new Note in the notes state variable array
            return false;
      }

      // Fetch notea method
      // requires User token inside header
      const fetchNotes = async (noteData) => {
            // add token in header
            // call api and get result

            //set resul Notes in the notes state variable array
      }

      // Delete note method
      // requires note Id in params and User token inside header
      const deleteNote = async (noteId) => {
            // add token in header
            // call api with noteId as params and get result

            //remove deleted note from the notes state variable
      }

      // Edit/Update note method
      // requires note Id in params and User token inside header
      const editNote = async (newNoteData) => {
            // add token in header
            // call api with body as newNoteData and get result

            //update result Note in the notes state variable array
      }



      return (
            // wrapping the whole children inside contextProvide and make below value available to all
            <NoteContext.Provider value={{ notes, alert, setNotes, setAlert, userToken, editNote, addNote, deleteNote, fetchNotes }}>
                  {props.children}
            </NoteContext.Provider>
      )
}

export default NoteState;