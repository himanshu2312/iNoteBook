import React, { useContext, useState } from 'react'
import noteContext from '../../../Context/notes/NoteContext';

export default function Modal({ modalRef, currentNote: current }) {
      const [Note, setNote] = useState({ title: current.title, desc: current.desc, tag: current.tag });
      const context = useContext(noteContext);

      const handleUpdateNote = async (e) => {
            e.preventDefault();
            await context.editNote(current._id, Note);
      }

      const handleChange = (e) => {
            setNote({ ...Note, [e.target.name]: e.target.value })
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
                                          </form>
                                    </div>
                                    <div className="modal-footer">
                                          <button type="button" className="btn btn-danger " data-bs-dismiss="modal">Cancle</button>
                                          <button type="button" className="btn btn-success" onClick={handleUpdateNote}>Update</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
