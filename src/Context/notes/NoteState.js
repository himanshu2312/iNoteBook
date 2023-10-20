import NoteContext from "./NoteContext";
import { useEffect, useState } from "react";

const NoteState = (props) => {

      //defining api base url
      const host = "http://localhost:5000"

      // Fetch notes method
      // requires User token inside header
      const fetchNotes = async () => {
            setloading(true);
            const url = `${host}/api/notes/get`
            const response = await fetch(
                  url, {
                  method: 'GET',
                  headers: {
                        'Content-Type': 'application/json',
                        'token': userToken
                  }
            })
            const result = await response.json()

            if (result.success) {
                  setNotes(result.notes);
                  setloading(false);
            }
            else {
                  handleExecption(result);
            }
      }

      // defining app state variable
      const [notes, setNotes] = useState(null);
      const [Alert, setAlert] = useState(null);
      const [userToken, setUserToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTI3YzZiZmM2NTY1YzNhOTc5NjRjMDMiLCJpYXQiOjE2OTczNjg5NTl9.ZgIXTN9l8NXXjVE6LxjG3yqG6oe0BIq40za4R_9zSNk');
      // const [userToken, setUserToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTMyNDhjZDA2NzFlY2ZlM2VkOWU5NWEiLCJpYXQiOjE2OTc3OTQyNTN9.OP0WwWpzenjIyIJ3Css-OD_-RzzMp1Pbqi4OhUmhZBs');
      const [loading, setloading] = useState(true);

      // Add note method
      // requires User token inside header
      const addNote = async (noteData) => {

            // creating api url to fetch
            const url = `${host}/api/notes/add`

            // fetching API url
            const response = await fetch(
                  url, {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                        'token': userToken
                  },
                  body: JSON.stringify(noteData)
            })

            // extracting json from url 
            const result = await response.json()

            // updating Notes  and setAlert
            if (result.success) {
                  setNotes(notes.concat(result.note))
                  setAlert({ type: "success", message: "Note Added successfully" })
                  setTimeout(() => {
                        setAlert(null);
                  }, 2000);
                  return true;
            } else {
                  handleExecption(result);
                  setTimeout(() => {
                        setAlert(null);
                  }, 2000);
                  return false;
            }
            

      }



      // Delete note method
      // requires note Id in params and User token inside header
      const deleteNote = async (noteId) => {

            // creating api url to fetch
            const url = `${host}/api/notes/${noteId}`

            // fetching API url
            const response = await fetch(
                  url, {
                  method: 'DELETE',
                  headers: {
                        'Content-Type': 'application/json',
                        'token': userToken
                  }
            })

            // extracting json from url 
            const result = await response.json()

            // updating Notes  and setAlert
            if (result.success) {
                  setNotes(notes.filter(note => note._id !== result.note._id))
                  setAlert({ type: "success", message: "Note deleted successfully" })
            }
            else {
                  handleExecption(result)
            }
            setTimeout(() => {
                  setAlert(null);
            }, 2000);
      }

      // Edit/Update note method
      // requires note Id in params and User token inside header
      const editNote = async (noteId, newNoteData) => {
            // creating api url to fetch
            const url = `${host}/api/notes/${noteId}`

            // fetching API url
            const response = await fetch(
                  url, {
                  method: 'PUT',
                  headers: {
                        'Content-Type': 'application/json',
                        'token': userToken
                  },
                  body: JSON.stringify(newNoteData)
            })

            // extracting json from url 
            const result = await response.json()

            // updating Notes  and setAlert
            if (result.success) {
                  setNotes(notes.map(note=>note._id===result.note._id?result.note:note))
                  setAlert({ type: "success", message: "Note Updated successfully" })
            } else {
                  handleExecption(result);
            }
            setTimeout(() => {
                  setAlert(null);
            }, 2000);
      }


      const handleExecption = (result) => {

            // handling server error responses
            if (result.message === "error") {
                  setAlert({ type: 'danger', message: result.error })
            } else if (result.message === "errors") {
                  let display = "";
                  result.errors.map(e => {
                        return display = display + '\n' + e.msg;
                  })
                  setAlert({ type: 'danger', message: display })

            } else {
                  setAlert({ type: 'danger', message: result.message })
            }
      }

      return (

            // wrapping the whole children inside contextProvide and make below value available to all
            <NoteContext.Provider value={{ notes, Alert, setNotes, setAlert, userToken, setUserToken, editNote, addNote, deleteNote, fetchNotes, loading }}>
                  {props.children}
            </NoteContext.Provider>
      )
}

export default NoteState;