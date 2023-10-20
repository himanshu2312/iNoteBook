import React, { useContext } from 'react'
import noteContext from '../../../Context/notes/NoteContext'

export default function NoteItem({ note, updateNote, setCurrent }) {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const handleEdit = () => {
    setCurrent(note)
    updateNote()
  }

  return (
    <div className='col-md-3 mb-3'>
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="card-title">{note.title}</h6>
            <div className='d-flex'>
              <i className="fa-solid fa-pen-to-square mx-2" style={{ color: "#1a1d74" }} onClick={handleEdit}></i>
              <i className="fa-solid fa-trash mx-2" style={{ color: "#a41919" }} onClick={(e) => { deleteNote(note._id) }}></i>
            </div>
          </div>
          <p className="card-text" style={{ fontSize: "0.9em" }}>{note.desc}</p>
        </div>
      </div>
    </div>
  )
}
