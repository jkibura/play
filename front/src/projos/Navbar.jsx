import { NavLink } from 'react-router-dom'
import '../projo-styles/Navbar.css'

const linkClass = ({ isActive }) =>
  ['navbar__link', isActive && 'navbar__link--active'].filter(Boolean).join(' ')

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Primary">
        <ul className="navbar__list">
          <li className="navbar__item navbar__item--lead">
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/checkbox" className={linkClass}>
              Checkbox
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/carousl" className={linkClass}>
              Carousel
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
