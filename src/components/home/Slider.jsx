import React from 'react';
import { Link } from 'react-router-dom';
import sliderImage from "../../assets/slider-2.webp"

function Slider() {
  return (
    <div className='h-800 border relative md:h-[31.5rem] sm:h-[25rem] sm:flex sm:justify-center '>
        <img src={sliderImage} alt="A man posing" className='h-full object-cover object-center -z-50 sm:object-left sm: ' />
        <div className='z-50 absolute top-60 right-28 text-center md:top-28 sm:top-10 sm:right-auto'>
            <h3 className='font-medium text-2xl relative mb-7 before:content-[""] before:bg-black before:w-20 before:h-[0.125rem] before:absolute before:left-24 before:top-4 after:content-[""] after:bg-black after:w-20 after:h-[0.125rem] after:absolute after:right-24 after:top-4 md:before:left-16 md:after:right-16 sm:mb-4 sm:before:-left-7 sm:after:-right-7 '>Stylish</h3>
            <h1 className='font-normal text-7xl mb-6 leading-[3.5rem] md:text-6xl sm:text-3xl sm:mb-3 '>Male Clothes</h1>
            <p className='text-lg mb-11'>30% off Summer Vacation</p>
            <button type='submit' className='border border-solid border-black px-[50px] pt-[16px] pb-[21px] hover:bg-lilac hover:border-none hover:transition-all hover:ease-linear  '> <Link to='collection'>SHOP NOW</Link> </button>
        </div>
    </div>
  )
}

export default Slider