import React from 'react';
import { LuLayoutGrid } from "react-icons/lu";
import { IoList } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function ProductCollectionTopBar({ handleSortOrder, filteredProductsLength }) {
  return (
    <div className=' flex justify-between items-center py-6 sm:flex-col sm:items-start sm:text-sm '>
        <div className='flex sm:flex-col sm:items-start '>
          <select className=' mr-8 ' onChange={handleSortOrder}>
            <option value="">Sort by newness</option>
            <option value="a-z">A to Z</option>
            <option value="z-a">Z to A</option>
            <option value="in stock">In stock</option>
          </select>
          <p className=' py-2 '>Showing {filteredProductsLength} of 20 results</p>
        </div>

        <div className=' flex justify-between w-14 '>
          <NavLink to={'grid'} className={({ isActive })=> (
            isActive ? ' text-lilac ' : ' text-black '
          )}>
            <LuLayoutGrid  size={20}/>
          </NavLink>
          <NavLink to={'list'} className={({ isActive })=> (
            isActive ? ' text-lilac ' : ' text-black '
          )}>
            <IoList size={20} />
          </NavLink>
        </div>
    </div>
  )
}

export default ProductCollectionTopBar