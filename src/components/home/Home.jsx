import React from 'react'
import Slider from './Slider'
import Product from './new arrival/Product'
import Support from './support/Support'

function Home() {
  return (
    <div className='h-fit'>
        <Slider/>
        <Support/>
        <Product/>
    </div>
  )
}

export default Home