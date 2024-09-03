import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className=' flex flex-col justify-center items-center'>
        <h2 className=' font-black text-lilac text-[15rem] md:text-9xl md:mb-6 sm:text-9xl sm:mb-6 '>Oops</h2>
        <p className=' mb-8 sm:text-sm '>The page you are looking for is not here.</p>
        <button className=' bg-transparent border px-20 py-5 hover:bg-lilac hover:border-lilac hover:text-white md:px-12 md:py-4 sm:px-10 sm:py-3 '> <Link to={'/'}>Home Page</Link> </button>
    </div>
  )
}

export default NotFound