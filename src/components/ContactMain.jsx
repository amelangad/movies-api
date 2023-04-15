import React from 'react'
import ContactImage from './ContactImage'
import ContactForm from './ContactForm'

export default function ContactMain() {
  return (
   <div className ="flex flex-col w-full h-screen justify-center items-center pb-20"> 
   <div className = "w-full h-1/4 pt-10 ">
   <h1 className ="text-red text-2xl lg:text-3xl text-center uppercase font-roboto">Contact me!</h1>
   </div>
    <div className="w-full h-3/4 flex flex-col lg:flex-row-reverse justify-center items-center">
   <ContactImage/>
   <ContactForm />
   </div>
   </div>
  )
}
