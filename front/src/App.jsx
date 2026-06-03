import { Route, Routes } from 'react-router-dom'

import Checkbox from './projos/Checkbox'
import Navbar from './projos/Navbar'
import Home from './projos/Home'
import Sidebar from './projos/Sidebar'
import Carousl from './projos/Carousl'
import { SidebarProvider } from './context/SidebarContext'

import './index.css'

const App = () => {
  return (
    <SidebarProvider>
      <Navbar />
      <main>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkbox" element={<Checkbox />} />
          <Route path="/carousel" element={<Carousl />} />
        </Routes>
      </main>
    </SidebarProvider>
  )
}

export default App 
