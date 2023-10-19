import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Alert from './Components/Alert/Alert';
import { useContext} from 'react';
import noteContext from './Context/notes/NoteContext';

function App() {
  const context = useContext(noteContext)
  return (
    <>
      <Router>
        <NavBar />
        <Alert alert={context.Alert} />
        <div className="container" style={{ marginTop: `${context.Alert ? '2' : '5'}rem` }} >
          <Routes>
            <Route path="/" Component={Home} />
            <Route exact path="/about" Component={About} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
