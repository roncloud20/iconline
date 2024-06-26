import React from 'react'
import { Button } from '@headlessui/react'
export default function Btn({value, clickHandler}) {
  return (
    <Button onClick={clickHandler || null} className="mt-10 block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" > {value || "Button"} </Button>
  )
}
