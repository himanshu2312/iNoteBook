import React from 'react'

export default function AddNote() {

      const handleAddNote = (e) => {
            e.preventDefault();
            alert("form submitted!!\nYou can edit your submit method to change this default behaviour")
      }

      return (
            <div className="container">
                  <h2>Add Note</h2>
                  <form className='mt-3' onSubmit={handleAddNote}>
                        <div className="mb-3">
                              <label htmlFor="title" className="form-label">Title</label>
                              <input type="text" className="form-control" id="title" aria-describedby="titleHelp" />
                              <div id="titleHelp" className="form-text">Title must contains atleast 3 Characters.</div>
                        </div>
                        <div className="mb-3">
                              <label htmlFor="desc" className="form-label">Description</label>
                              <input type="text" className="form-control" id="desc" aria-describedby="descHelp" />
                              <div id="descHelp" className="form-text">Description must contains atleast 5 Characters.</div>
                        </div>
                        <div className="mb-3">
                              <label htmlFor="tag" className="form-label">Tag</label>
                              <input type="text" className="form-control" id="tag" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
            </div>
      )
}
