import React from 'react'
import { ListContext } from  './MoviesList'
import { useContext } from 'react';

export default function Aside(props) {
const [list,setList] = useContext(ListContext);

  return (
    <aside className = "bg-red text-black w-full h-auto mt-20 flex flex-col justify-center items-center">
       <h1 className="text-2xl text-black p-2"><span className ="text-green font-bold">The best movie: </span>{props.favourite}</h1>
       <h1 className = "text-xl font-bold pt-12 p-5 ">List of favourite: </h1>
<div>
{list.map(item => <li key={crypto.randomUUID()} className = "p-2">{item}</li>)}

</div>
    </aside>
  )
}