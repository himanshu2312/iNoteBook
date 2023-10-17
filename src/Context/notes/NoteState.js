import NoteContext from "./NoteContext";

const NoteState = (props) => {
      const stateObject = {
            theme: "light",
            notes: [
                  {
                        "_id": "652a6a151dbe24e7cd3a94f4",
                        "userId": "6527c6bfc6565c3a97964c03",
                        "title": "titile2",
                        "desc": "sample description2",
                        "tag": "sample2",
                        "date": "2023-10-14T10:14:45.862Z",
                        "__v": 0
                  },
                  {
                        "_id": "652bcd92e052aaa3fa6583c9",
                        "userId": "6527c6bfc6565c3a97964c03",
                        "title": "title up",
                        "desc": "Des new",
                        "tag": "test",
                        "date": "2023-10-15T11:31:30.327Z",
                        "__v": 0
                  },
                  {
                        "_id": "652bcd92e052aaa3fa6583c9",
                        "userId": "6527c6bfc6565c3a97964c03",
                        "title": "title up",
                        "desc": "Des new",
                        "tag": "test",
                        "date": "2023-10-15T11:31:30.327Z",
                        "__v": 0
                  },
                  {
                        "_id": "652bcd92e052aaa3fa6583c9",
                        "userId": "6527c6bfc6565c3a97964c03",
                        "title": "title up",
                        "desc": "Des new",
                        "tag": "test",
                        "date": "2023-10-15T11:31:30.327Z",
                        "__v": 0
                  },
                  {
                        "_id": "652bcd92e052aaa3fa6583c9",
                        "userId": "6527c6bfc6565c3a97964c03",
                        "title": "title up",
                        "desc": "Des new",
                        "tag": "test",
                        "date": "2023-10-15T11:31:30.327Z",
                        "__v": 0
                  },
                  {
                        "_id": "652bcd92e052aaa3fa6583c9",
                        "userId": "6527c6bfc6565c3a97964c03",
                        "title": "title up",
                        "desc": "Des new",
                        "tag": "test",
                        "date": "2023-10-15T11:31:30.327Z",
                        "__v": 0
                  },
                  {
                        "_id": "652bcd92e052aaa3fa6583c9",
                        "userId": "6527c6bfc6565c3a97964c03",
                        "title": "title up",
                        "desc": "Des new",
                        "tag": "test",
                        "date": "2023-10-15T11:31:30.327Z",
                        "__v": 0
                  }
            ]
      }

      return (
            <NoteContext.Provider value={stateObject}>
                  {props.children}
            </NoteContext.Provider>
      )
}

export default NoteState;