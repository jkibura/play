import '../projo-styles/Sidebar.css'
import { NavLink } from 'react-router-dom'
import { useSidebar } from '../context/SidebarContext'

const sidebarItems = [
  { label: 'Home', path: '/' },
  { label: 'Checkbox', path: '/checkbox' },
  { label: 'Carousel', path: '/carousel' },
]

const Sidebar = () => {
  const { sidebar, toggleSidebar } = useSidebar()

  return (
    <aside className={`sidebar ${sidebar}`}>
      {sidebarItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          onClick={toggleSidebar}
        >
          {item.label}
        </NavLink>
      ))}
    </aside>
  )
}

export default Sidebar