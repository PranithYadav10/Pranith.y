import { useState } from 'react'
import './App.css'
import { Dashboard } from './components/dashboard/Dashboard'
import { Highlight } from './components/highlights/Highlight'
import { Categories } from './components/categories/Categories'
import { ActivityPage } from './components/ActivityPage'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'

function App() {
 
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:activity_type" element={<ActivityPage/>} />
    </Routes>
    </>
  )
}

export default App
