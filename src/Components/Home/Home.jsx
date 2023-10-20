import { React } from 'react'
import AddNote from "./AddNote/AddNote"
import Notes from './Notes/Notes';

export default function Home() {
      return (
            <div>
                  <AddNote />
                  <Notes/>
            </div>
      )
}
