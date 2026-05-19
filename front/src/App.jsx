import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import MainLayout from './layout/MainLayout'
import Checkbox from './projos/Checkbox'
import Carousl from './projos/Carousl'

import './index.css'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/checkbox" replace />} />
        <Route path="/checkbox" element={<Checkbox />} />
        <Route path="/carousl" element={<Carousl />} />
      </Route>
    </Routes>
  )
}

export default App
