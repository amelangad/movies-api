import React from 'react'
import {useState} from 'react';
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import '../Sidebar.css';

export default function Nav() {

  return (
    <nav className ="w-full h-20 flex items-center justify-center bg-red">
        <ul className=" hidden md:flex">
           <li className ="pr-16 text-xl  hover:text-green hover:scale-x-110 transition-all ease-in-out duration-500"><Link to="/">Home</Link></li>
           <li className ="pr-16 text-xl hover:text-green hover:scale-x-110 transition-all ease-in-out duration-500"><Link to="/projects">Other projects</Link></li>
           <li className ="pr-16 text-xl hover:text-green hover:scale-x-110 transition-all ease-in-out duration-500"><Link to="/contact">Contact</Link></li>
        </ul>

        <Menu right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="projects" className="menu-item" href="/projects">Projects</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    </nav>
 
  )
}