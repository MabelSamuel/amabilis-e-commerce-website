import React from 'react'

function Input({type, name, placeholder, register, value, }) {
  return (
    <input className=' border h-12 w-full p-3 outline-lilac md:text-sm sm:text-sm ' type={type} name={name} placeholder={placeholder} {...register(name)} value={value} />
  )
}

export default Input