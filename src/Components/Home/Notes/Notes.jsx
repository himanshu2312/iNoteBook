import { React, useContext } from 'react'
import noteContext from '../../../Context/notes/NoteContext'
import NoteItem from './NoteItem';

export default function Notes() {
      const state = useContext(noteContext);
      return (
            <div className='container mt-5'>
                  <h2>Your Notes</h2>
                  <div className='row mt-3'>
                        {
                              state.notes.map((note, index) => {
                                    return (
                                          <NoteItem note={note} key={index} />
                                    )
                              })
                        }
                  </div>
            </div>
      )
}
