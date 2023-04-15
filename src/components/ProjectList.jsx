import React from 'react'
import Project from '../components/Project'
import bigbag from '../assets/bigbag.png'
import kamar from '../assets/kamar.jpg'
import shotx from '../assets/shotx.png'
import memory from '../assets/memory.png'
import portfolio from '../assets/portfolio.jpg';
import beauty from '../assets/beauty.jpg';

export default function ProjectList() {
  return (
    <div className = "w-full h-full flex flex-col bg-green">
    <div className = "w-full h-full lg:h-screen flex flex-col lg:flex-row flex-wrap lg:pb-36">
    <Project
    title="Portfolio"
    img = {portfolio}
    href="https://this-is-my-portfoliooo.netlify.app/"
    tech = "React + Three.js  + Drei + Fiber"
    ></Project>

    <Project
    title = "Recycling Company"
    href="https://bigbag.opole.pl"
    img = {bigbag}
    tech ="React + Tailwind + formularz PHPMailer"

    />
     <Project
    title="Cleaning company"
    href="https://kamar.opole.pl"
    img = {kamar}
    tech ="HTML + SCSS + JS"

    />
     <Project
    title="Photographic studio"
    href="https://shotx.pl"
    img = {shotx}
    tech ="Wordpress/Elementor"

    />
     <Project
    title="Memory game"
    href="https://amelangad.github.io/memory/"
    img = {memory}
    tech ="HTML + CSS + JS (isn't responsive)"
    />
       <Project
    title="Beauty salon website"
    href="https://beauty-salooon.netlify.app/"
    img = {beauty}
    tech ="React"
    />

    </div>
    <p className = "text-center text-xl text-red pt-24 pb-12">Code here: <a href="https://github.com/amelangad" className = "cursor-pointer">www.github.com/amelangad</a></p>
    </div>

  )}  