import { React, useContext } from 'react'
import noteContext from '../../../Context/notes/NoteContext'
import NoteItem from './NoteItem';
import Spinner from "../../Spinner/Spinner"

export default function Notes() {
      const context = useContext(noteContext);
      return (
            <div className='container mt-5'>
                  <h2>Your Notes</h2>
                  {
                        context.loading ?
                              <Spinner /> :
                              <div className='row my-4'>
                                    {
                                          context?.notes?.map((note, index) => {
                                                return (
                                                      <NoteItem note={note} key={index} />
                                                )
                                          })
                                    }
                              </div>
                  }
            </div>
      )
}
