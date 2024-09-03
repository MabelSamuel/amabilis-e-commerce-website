import React from 'react'
import SideBar from './SideBar'
import ProductCollection from './ProductCollection'

function Collection() {
  return (
    <div className=' flex py-16 px-12 gap-8 md:flex-col-reverse md:px-4 sm:flex-col-reverse sm:px-4 '>
        <SideBar/>
        <ProductCollection/>
    </div>
  )
}

export default Collection