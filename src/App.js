import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Alert from './Components/Alert/Alert';
import { useContext} from 'react';
import noteContext from './Context/notes/NoteContext';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

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
            <Route exact path="/login" Component={Login} />
            <Route exact path="/signup" Component={Signup} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
