import React from 'react'
import { useState } from 'react'

export default function ContactForm() {

  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    try {
      const formData = new FormData(form);
      //const data = Object.fromEntries(formData);
      console.log(formData);
      const url = form.getAttribute("action");
      const method = form.getAttribute("method");
      const response = await fetch(url, {
        method: method,
        body: formData,
      })
      console.log(response)

    }
    catch (err) { console.log(err) }
  }

  return (
    <>
      <form
      className = "w-3/4 md:w-1/2 xl:w-1/3 h-full flex flex-col  lg:px-24 py-10 "
        id="form"
        enyctype="multipart/form-data"
        action="http://localhost:3000"
        method="POST"
        onSubmit={onSubmit}>
        <label htmlFor="email" className="text-red font-bold font-roboto text-xl">
          E-mail
          <input
            className ="w-full h-auto"
            placeholder ="Here email your should be"
            name="email"
            type="email"
            value={email}
            onClick ={() => console.log("Yoda said that...")}
            onChange={(e) => setEmail(e.target.value)} />
        </label>
        <textarea
        className = "my-5 w-full h-48"
          name="msg"
          placeholder = "Text me... This is the way :)"
          value={msg}
          required={true}
          onChange={(e) => setMsg(e.target.value)}>
        </textarea>
        <button type="submit"
          className=" w-full h-12 cursor-pointer text-white border-2 border-green rounded-xl text-xl hover:bg-green hover:text-black ease-in duration-200">Send</button>
      </form>
   
    </>
  )
}