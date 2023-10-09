import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import CrudCards from './components/CrudCards'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='flex flex-row'>
      <Nav />
      <Outlet/>
    </div>
  )
}

export default App
