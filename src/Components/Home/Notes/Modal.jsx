import React, { useContext } from 'react'
import noteContext from '../../../Context/notes/NoteContext';

export default function Modal({ modalRef, currentNote, setcurrentNote }) {
      const context = useContext(noteContext);

      const handleUpdateNote = async (e) => {
            e.preventDefault();
            await context.editNote(currentNote._id, { title: currentNote.title, desc: currentNote.desc, tag: currentNote.tag });

      }

      const handleChange = (e) => {
            setcurrentNote({ ...currentNote, [e.target.name]: e.target.value })
      }
      return (
            <div>
                  <button type="button" className="btn btn-primary d-none" ref={modalRef} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                  </button>

                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                              <div className="modal-content">
                                    <div className="modal-header">
                                          <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                                    </div>
                                    <div className="modal-body">
                                          <form>
                                                <div className="mb-3">
                                                      <label htmlFor="title" className="form-label">Title</label>
                                                      <input type="text" className="form-control" id="title" name="title" aria-describedby="titleHelp" value={currentNote?.title} onChange={handleChange} />
                                                      <div id="titleHelp" className="form-text">Title must contains atleast 3 Characters.</div>
                                                </div>
                                                <div className="mb-3">
                                                      <label htmlFor="desc" className="form-label">Description</label>
                                                      <input type="text" className="form-control" id="desc" name="desc" aria-describedby="descHelp" value={currentNote?.desc} onChange={handleChange} />
                                                      <div id="descHelp" className="form-text">Description must contains atleast 5 Characters.</div>
                                                </div>
                                                <div className="mb-3">
                                                      <label htmlFor="tag" className="form-label">Tag</label>
                                                      <input type="text" className="form-control" id="tag" name="tag" value={currentNote?.tag} onChange={handleChange} />
                                                </div>
                                          </form>
                                    </div>
                                    <div className="modal-footer">
                                          <button type="button" className="btn btn-danger " data-bs-dismiss="modal">Cancle</button>
                                          <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={handleUpdateNote}>Update</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
