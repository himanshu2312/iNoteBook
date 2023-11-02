import { React, useContext, useRef, useState } from 'react'
import noteContext from '../../../Context/notes/NoteContext'
import NoteItem from './NoteItem';
import Spinner from "../../Spinner/Spinner"
import UpdateModal from "./UpdateModal"

export default function Notes() {
      const modalRef = useRef()
      const [currentNote, setcurrentNote] = useState({ title: "", desc: "", tag: "" })

      const updateNote = (note) => {
            setcurrentNote(note)
            modalRef.current.click()
      }

      const context = useContext(noteContext);
      return (
            <div className='container mt-5'>
                  <h2 style={{textAlign:"center"}}>Your Notes</h2>
                  {context.loading ? <Spinner /> :
                        <div className='container row my-4'>
                              {context?.notes?.length === 0 && <p>No notes to display</p>}
                              {
                                    context?.notes?.map((note, index) => {
                                          return (
                                                <NoteItem note={note} key={index} updateNote={updateNote} />
                                          )
                                    })
                              }
                        </div>}
                  <UpdateModal modalRef={modalRef} currentNote={currentNote} setcurrentNote={setcurrentNote} />
            </div>
      )
}
