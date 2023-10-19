import React, { useContext } from 'react'
import noteContext from '../../../Context/notes/NoteContext'

export default function NoteItem({ note }) {
  const context = useContext(noteContext);
  const {deleteNote,editNote} = context;
  const newNote={title:"new node tit", desc:"new note desc", tag:"new note tag"}

  return (
    <div className='col-md-3 mb-3'>
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div>
              <i className="fa-solid fa-pen-to-square mx-2" style={{ color: "#1a1d74" }} onClick={(e)=>{editNote(note._id,newNote)}}></i>
              <i className="fa-solid fa-trash mx-2" style={{ color: "#a41919" }} onClick={(e)=>{deleteNote(note._id)}}></i>
            </div>
          </div>
          <p className="card-text">{note.desc}</p>
        </div>
      </div>
    </div>
  )
}
