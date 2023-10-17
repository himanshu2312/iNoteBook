import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container" style={{ marginTop: '5rem' }}>
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
