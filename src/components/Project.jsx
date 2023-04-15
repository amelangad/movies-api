import React from 'react'

export default function Project(props) {
  return (
    <div className ="flex flex-col justify-center items-center p-10 basis-1/3 cursor-pointer">
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <h1 className = "text-red  text-center text-xl font-roboto p-3">
          {props.title}</h1>
        <div className = "w-full  h-auto  xl:h-80 py-5">
            <img src={props.img}
            className = "w-full h-full rounded-lg">
            </img>
        </div></a>
        <p className = "text-xl p-3">{props.tech}</p>
        <p className = "text-lg">{props.desc}</p>
    </div>

  )
}