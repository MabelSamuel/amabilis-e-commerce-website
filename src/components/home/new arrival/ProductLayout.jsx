import React from 'react';

function ProductLayout({ children }) {
  return (
    <div className=' px-[4.375rem] pb-[3.75rem] md:px-8 sm:px-5 '>
        {children}
    </div>
  )
}

export default ProductLayout