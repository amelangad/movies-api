import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Nav from '../src/components/Nav'
import Home from '../src/pages/Home'
import Projects from '../src/pages/Projects'
import Contact from '../src/pages/Contact'


function App() {
  return (
    <div>
      <Nav />
      <Routes>
      <Route path ="/" element = {<Home />}>
        </Route>
        <Route path ="/projects" element = {<Projects />}>
        </Route>
        <Route path ="/contact" element = {<Contact />}>
        </Route>
        </Routes>
    
    </div>

  )
}

export default App