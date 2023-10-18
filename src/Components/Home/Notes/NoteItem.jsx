import React from 'react'

export default function NoteItem({ note }) {
  return (
    <div className='col-md-3 mb-3'>
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div>
              <i className="fa-solid fa-pen-to-square mx-2" style={{ color: "#1a1d74" }}></i>
              <i className="fa-solid fa-trash mx-2" style={{ color: "#a41919" }}></i>
            </div>
          </div>
          <p className="card-text">{note.desc}</p>
        </div>
      </div>
    </div>
  )
}
