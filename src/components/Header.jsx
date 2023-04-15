import React from 'react'
import movie from '../assets/movie.mp4';

function Header() {
  return (
  <div className =" w-full h-full">
    <video src = {movie}
    autoPlay
    loop
    muted
    />
  </div>
  )
}

export default Header