import NoteContext from "./NoteContext";

const NoteState = (props) => {
      const stateObject = {
            name: "Himanshu",
            theme: "light"
      }

      return (
            <NoteContext.Provider value={stateObject}>
                  {props.children}
            </NoteContext.Provider>
      )
}

export default NoteState;