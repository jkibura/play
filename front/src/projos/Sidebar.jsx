import { useEffect, useId, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../projo-styles/Sidebar.css'

const items = [
  { name: 'Projo 1', to: null },
  { name: 'Projo 2', to: null },
  { name: 'Projo 3', to: null },
  { name: 'Projo 4', to: null },
  { name: 'Projo 5', to: null },
  { name: 'Checkbox', to: '/checkbox' },
  { name: 'Carousel', to: '/carousl' },
  { name: 'Projo 6', to: null },
]

const itemClass = ({ isActive }) =>
  ['sidebar__link', isActive && 'sidebar__link--active'].filter(Boolean).join(' ')

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navId = useId()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <div className={['sidebar', isOpen && 'sidebar--open'].filter(Boolean).join(' ')}>
      <button
        type="button"
        className="sidebar__toggle"
        aria-expanded={isOpen}
        aria-controls={navId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="sidebar__toggle-text">{isOpen ? 'Close menu' : 'Open menu'}</span>
        <span className="sidebar__toggle-icon" aria-hidden>
          {isOpen ? '×' : '☰'}
        </span>
      </button>

      <nav id={navId} className="sidebar__nav" aria-label="Sections">
        <ul className="sidebar__list">
          {items.map((item) => (
            <li key={item.name} className="sidebar__item">
              {item.to ? (
                <NavLink to={item.to} className={itemClass}>
                  {item.name}
                </NavLink>
              ) : (
                <span className="sidebar__link sidebar__link--muted" aria-disabled="true">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {isOpen ? (
        <button
          type="button"
          className="sidebar__backdrop"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
        />
      ) : null}
    </div>
  )
}

export default Sidebar
