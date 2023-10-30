import React, { useContext, useState } from 'react'
import noteContext from '../../Context/notes/NoteContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
      const navigate=useNavigate();
      const [User, setUser] = useState({ email: "", password: "" });
      const context = useContext(noteContext);

      const handleLogin = async (e) => {
            e.preventDefault();
            const result = await context.login(User);
            if (result) {
                  setUser({ email: "", password: "" })
                  setTimeout(() => {
                        navigate("/");
                  }, 2000);
            }
      }

      const handleChange = (e) => {
            setUser({ ...User, [e.target.name]: e.target.value })
      }

      return (
            <div className='container'>
                  <form className='mt-3' onSubmit={handleLogin}>
                        <div className="mb-3">
                              <label htmlFor="email" className="form-label">Email</label>
                              <input type="email" className="form-control" autoComplete='username' id="email" name="email" value={User?.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                              <label htmlFor="password" className="form-label">Password</label>
                              <input type="password" autoComplete="current-password" className="form-control" id="password" name="password" aria-describedby="passwordHelp" value={User?.password} onChange={handleChange} />
                              <div id="passwordHelp" className="form-text">Password must contains atleast 4 Characters.</div>
                        </div>
                        <button type="submit" className="btn btn-primary my-3">LOGIN</button>
                  </form>
            </div>
      )
}

export default Login
