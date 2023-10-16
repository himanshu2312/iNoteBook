import {React, useContext} from 'react'
import noteContext from '../../Context/notes/NoteContext'

export default function Home() {
      const state = useContext(noteContext);
      return (
            <div>
                  This is Home
                  <p>Name from the note state is {state.name}</p>
                  <p>Theme from the note state is {state.theme}</p>
            </div>
      )
}
