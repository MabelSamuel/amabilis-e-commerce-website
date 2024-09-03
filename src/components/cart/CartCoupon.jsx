import React from 'react'

const CartCoupon = () => {
  return (
    <div className='border w-1/3 px-8 py-10 bg-gray-200 rounded-md md:w-full sm:w-full sm:text-sm sm:px-4'>
        <h3 className='text-lg font-medium'>Use Coupon Code</h3>
        <p className='mb-4'>Enter your coupon code if you have one.</p>
        <input type="text" className='block outline-lilac border w-full px-4 py-2'/>
        <button className='uppercase bg-lilac w-full rounded-full py-4 text-white font-medium mt-8 hover:bg-black'>apply coupon</button>
    </div>
  )
}

export default CartCoupon