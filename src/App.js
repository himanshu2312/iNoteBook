import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <h1>This is a NoteBook Application</h1>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route exact path="/about" Component={About}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
