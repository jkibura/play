import { Route, Routes } from 'react-router-dom'

import Checkbox from './projos/Checkbox'
import Carousl from './projos/Carousl'

import './index.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
    </Routes>
  )
}

export default App 
