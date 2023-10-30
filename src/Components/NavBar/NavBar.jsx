import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import noteContext from '../../Context/notes/NoteContext';

export default function NavBar() {
      const location = useLocation();
      const navigate = useNavigate();
      const context = useContext(noteContext)

      const handleLogout = () => {
            localStorage.removeItem('token')
            context.setuser(null)
            navigate("/login")
      }
      return (
            <nav className={`navbar navbar-expand-lg bg-dark navbar-dark fixed-top`}>
                  <div className="container-fluid">
                        <Link className="navbar-brand" to="/">iNotebook</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                                    </li>
                              </ul>
                              <div className="d-flex">
                                    {
                                          context.user ?
                                                <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                                                :
                                                <>
                                                      <Link className="btn btn-primary" to="/login">Login</Link>
                                                      <Link className="btn btn-primary mx-2" to="/signup">SignUp</Link>
                                                </>
                                    }
                              </div>
                        </div>
                  </div>
            </nav>
      )
}
