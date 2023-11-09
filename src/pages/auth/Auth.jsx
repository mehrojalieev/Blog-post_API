import "./Auth.scss"
import { Outlet } from 'react-router-dom'
import { NavLink } from "react-router-dom"

const Auth = () => {
  return (
    <div className="auth">
        <div className="auth-container">
          <nav className="auth__nav">
            <ul className="auth__nav-list">
              <li className="auth__nav-item">
                <NavLink className={({isActive}) => isActive ?  "auth__nav-link auth__nav-link--active" : "auth-_nav-link" } to="/auth/login">Login</NavLink>
              </li>
              <li className="auth__nav-item">
                <NavLink  className={({isActive}) => isActive ? "auth__nav-link auth__nav-link--active" : "auth-_nav-link"  } to="/auth/signup">Sign Up</NavLink>
              </li>
            </ul>
          </nav>
      <Outlet/>
        </div>
    </div>
  )
}

export default Auth