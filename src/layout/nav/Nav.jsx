import { Container } from "../../utils"
import { NavLink, Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"

const Nav = ({type}) => {
  return (
    <nav className="nav">
        <Container>
            <div className="nav__wrapper">
                <div className="nav__logo">
                    <img src={Logo} alt="" width={200} height={40} />
                    <h1 className="nav__seo-title">Medium</h1>
                </div>
                <ul className="nav__list">
                  <li className="nav__item"><NavLink to="/">Home</NavLink></li>
                  <li className="nav__item"><NavLink to="/membership">Membership</NavLink></li>
                  <li className="nav__item"><NavLink to="/articles">Articles</NavLink></li>
                  <li className="nav__item"><NavLink to="/auth/login">Login</NavLink></li>
                  <li className="nav__item"><NavLink to="/auth/signup">Get Started</NavLink></li>
                </ul>
            </div>
        </Container>
    </nav>
  )
}

export default Nav