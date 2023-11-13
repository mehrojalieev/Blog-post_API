import nav from "./nav.scss"
import { Container } from "../../utils"
import { NavLink, useLocation } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"
import { useEffect, useState } from "react"
import apiInstanse from "../../services/api"
import { useValue } from "../../context/AppProvider"
import Skeleton from "react-loading-skeleton"
const EXPECTION_ROUTES = ["/auth/login", "/auth/signup", "/admin"]


const Nav = ({ type }) => {
  const { pathname } = useLocation()

  const [state, dispatch] = useValue()

  useEffect(() => {
    apiInstanse(`/api/users/${state.auth.user_id}`, {
      headers: {
        "Authorization": "Bearer " + state.auth.token
      }
    })
  }, [])
  return !EXPECTION_ROUTES.includes(pathname) && (
    <nav className="nav">
      <Container>
        <div className="nav__wrapper">
          <div className="nav__logo">
            
            <h1 className="nav__seo-title">Medium</h1>
          </div>
          <ul className="nav__list">
            <li className="nav__item"><NavLink end className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"} to="/">Home</NavLink></li>
            <li className="nav__item"><NavLink className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"} to="/membership">Membership</NavLink></li>
            <li className="nav__item"><NavLink className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"} to="/articles">Articles</NavLink></li>
            <li className="nav__item"><NavLink className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"} to="/auth/login">Login</NavLink></li>
            <li className="nav__item"><NavLink className={({ isActive }) => isActive ? "nav__link nav__link--active btn" : "nav__link btn"} to="/auth/signup">Get Started</NavLink></li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default Nav