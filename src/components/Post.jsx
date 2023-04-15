import React from 'react'
import { useRef } from 'react';


function Post(props) {
  const myDesc = useRef();

  return (
    <div className="flex flex-col p-12">
      <li className="hover:scale-110 transition ease-in-out cursor-pointer">
        <h1 className="text-green text-center p-2"> Title: {props.Title}</h1>
        <img src={props.Poster}>
        </img>
        <div className="flex flex-col justify-center items-center">
          <button className="m-2 w-auto px-5 h-auto border-2 border-grey"
            onClick={() => myDesc.current.classList.toggle("active")}
          >More...</button>
          <p ref={myDesc}
            className="hidden text-white"
          >Year: {props.Year}<br />
            Type: {props.Type}</p>
        </div>
      </li>
      
    </div>
  )
}

export default Post