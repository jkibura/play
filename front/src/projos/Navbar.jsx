import '../projo-styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useSidebar } from '../context/SidebarContext';

function Navbar() {
  const { toggleSidebar } = useSidebar();

    return (
        <nav>
          <div className="nav-header">
            <MenuIcon className='menu' onClick={toggleSidebar}/>
            <div className="logo">Play</div>
          </div>

          <ul className="nav-links">
            
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              
            
          </ul>

          <div className="buttons">
            <button className='btn'>Login</button>
          </div>
        </nav>
    )
}

export default Navbar