import React, { useContext, useState } from 'react'
import noteContext from '../../Context/notes/NoteContext';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const Signup = () => {
      document.title = "SignUp | iNoteBook"
      const navigate = useNavigate();
      const [user, setUser] = useState({ name: "", email: "", password: "" });
      const context = useContext(noteContext);

      const handleLogin = async (e) => {
            e.preventDefault();
            // console.log(user)
            const result = await context.signup(user);
            if (result) {
                  setUser({ name: "", email: "", password: "" })
                  setTimeout(() => {
                        navigate("/");
                  }, 2000);
            }
      }

      const handleChange = (e) => {
            setUser({ ...user, [e.target.name]: e.target.value })
      }

      return (
            <div className='container'>
                  {
                        context?.loading ? <Spinner /> :
                              <>
                                    <h3 style={{ textAlign: "center" }}>Create an account to continue with <span className='text-primary'>iNoteBook</span></h3>
                                    <form className='mt-3' onSubmit={handleLogin}>
                                          <div className="mb-3">
                                                <label htmlFor="name" className="form-label">Name</label>
                                                <input type="text" className="form-control" id="name" name="name" minLength={3} required aria-describedby="nameHelp" value={user?.name} onChange={handleChange} />
                                                <div id="nameHelp" className="form-text">name must contains atleast 3 Characters.</div>
                                          </div>
                                          <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="email" name="email" required value={user?.email} onChange={handleChange} />
                                          </div>
                                          <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="password" name="password" autoComplete='password' required minLength={4} aria-describedby="passwordHelp" value={user?.password} onChange={handleChange} />
                                                <div id="passwordHelp" className="form-text">Password must contains atleast 4 Characters.</div>
                                          </div>
                                          <button type="submit" className="btn btn-primary my-3">SIGNUP</button>
                                    </form>
                              </>
                  }
            </div>
      )
}

export default Signup
