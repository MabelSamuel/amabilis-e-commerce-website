import React from 'react'

const Button = ( {name} ) => {
  return (
    <button className=' text-[0.938rem] font-medium bg-gray-300 w-28 h-10 mt-7 transition-colors duration-100 ease-linear delay-75 transform hover:bg-lilac hover:text-white md:text-sm sm:text-sm sm:h-9 ' type='submit' >{name}</button>
  )
}

export default Button