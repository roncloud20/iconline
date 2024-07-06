import React from 'react'

export default function TextInput({type, name, placeholder, value, clickHandler}) {

  return (
    <input type={type || "text"} name={name} id={name} required className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 my-5" placeholder={placeholder} value={value} onChange={clickHandler} />
  )
}
