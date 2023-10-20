import { React, useContext, useRef,useState } from 'react'
import noteContext from '../../../Context/notes/NoteContext'
import NoteItem from './NoteItem';
import Spinner from "../../Spinner/Spinner"
import Modal from "./Modal"

export default function Notes() {
      const modalRef = useRef()
      const [current, setCurrent] = useState(null);

      const openModel = () => {
            modalRef.current.click()
      }

      const context = useContext(noteContext);
      return (
            <div className='container mt-5'>
                  <h2>Your Notes</h2>
                  {context.loading && <Spinner />}
                  <div className='row my-4'>
                        {
                              context?.notes?.map((note, index) => {
                                    return (
                                          <NoteItem note={note} key={index} updateNote={openModel} setCurrent={setCurrent}/>
                                    )
                              })
                        }
                  </div>
                  <Modal modalRef={modalRef} current={current} />
            </div>
      )
}
