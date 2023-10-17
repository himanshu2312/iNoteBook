import React from 'react'

export default function NoteItem({ note }) {
  return (
    <div className='col-md-3'>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.desc}</p>
        </div>
      </div>
    </div>
  )
}
