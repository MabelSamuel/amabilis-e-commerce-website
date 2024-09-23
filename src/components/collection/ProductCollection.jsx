import React from 'react';
import ProductCollectionTopBar from './ProductCollectionTopBar';

import { Outlet } from 'react-router-dom';

function ProductCollection({ handleSortOrder, filteredProducts, filteredProductsLength }) {
  
  return (
    <div className='px-4 w-3/4 border rounded-lg md:w-full md:border-none sm:w-full sm:border-none sm:px-1'>
        <ProductCollectionTopBar handleSortOrder={handleSortOrder} filteredProductsLength={filteredProductsLength} />
        <Outlet context={filteredProducts} />
    </div>
  )
}

export default ProductCollection