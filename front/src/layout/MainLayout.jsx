import { Outlet } from 'react-router-dom'

import Navbar from '../projos/Navbar'
import ScrollToTop from '../projos/ScrollToTop'
import Sidebar from '../projos/Sidebar'

const MainLayout = () => {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="app-main" id="main-content" tabIndex={-1}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
