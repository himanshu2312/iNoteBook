import { React, useContext, useEffect } from 'react'
import AddNote from "./AddNote/AddNote"
import Notes from './Notes/Notes';
import { useNavigate } from 'react-router-dom';
import noteContext from '../../Context/notes/NoteContext';

export default function Home() {
      document.title="iNoteBook"
      const navigate = useNavigate();
      const context = useContext(noteContext);
      const { fetchNotes, user } = context

      useEffect(() => {
            if (localStorage.getItem('token')) {
                  fetchNotes();
            } else {
                  setTimeout(() => {
                        navigate("/login")
                  }, 3000)
            }
            // eslint-disable-next-line
      }, [user, navigate])

      return (
            <>
                  {
                        user ?
                              <div>
                                    <AddNote />
                                    <Notes />
                              </div> :
                              <div className='conatiner text-center'>
                                    <h3>Login Required</h3>
                                    <h5>Redirecting... to login</h5>
                              </div>
                  }
            </>
      )
}
