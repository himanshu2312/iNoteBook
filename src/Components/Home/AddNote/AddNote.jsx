import React, { useContext, useState } from 'react'
import noteContext from '../../../Context/notes/NoteContext';

export default function AddNote() {
      const [Note, setNote] = useState({ title: "", desc: "", tag: "" });
      const context = useContext(noteContext);

      const handleAddNote = async (e) => {
            e.preventDefault();
            await context.addNote(Note);
      }

      const handleChange = (e) => {
            setNote({ ...Note, [e.target.name]: e.target.value })
      }

      return (
            <div className="container">
                  <h2>Add Note</h2>
                  <form className='mt-3' onSubmit={handleAddNote}>
                        <div className="mb-3">
                              <label htmlFor="title" className="form-label">Title</label>
                              <input type="text" className="form-control" id="title" name="title" aria-describedby="titleHelp" value={Note?.title} onChange={handleChange} />
                              <div id="titleHelp" className="form-text">Title must contains atleast 3 Characters.</div>
                        </div>
                        <div className="mb-3">
                              <label htmlFor="desc" className="form-label">Description</label>
                              <input type="text" className="form-control" id="desc" name="desc" aria-describedby="descHelp" value={Note?.desc} onChange={handleChange} />
                              <div id="descHelp" className="form-text">Description must contains atleast 5 Characters.</div>
                        </div>
                        <div className="mb-3">
                              <label htmlFor="tag" className="form-label">Tag</label>
                              <input type="text" className="form-control" id="tag" name="tag" value={Note?.tag} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-success">Add Note</button>
                  </form>
            </div>
      )
}
