import React from 'react'

const Order = ({ cart, getTotalPriceForItem, getTotalPriceOfCart }) => {
  const totalPriceOfCart = getTotalPriceOfCart();
  return (
    <>
    <h3 className='font-medium text-xl'>Your Order</h3>
    <div className='bg-gray-200 p-8 my-6 rounded-xl'>
        <div className='flex justify-between pb-8 border-b border-dark-gray *:font-medium'>
            <h3>Product</h3>
            <h3>Total</h3>
        </div>
        <div className='py-4 border-b border-dark-gray '>
            {cart?.map((items)=> (
              <ul key={items.id} className='flex justify-between *:mb-4'>
                <li>{items.title} X {items.quantity}</li>
                <li>${getTotalPriceForItem(items)}</li>
              </ul>
            ))}
        </div>
        <div className=' flex justify-between py-4 border-b border-dark-gray '>
            <h3>Shipping</h3>
            <h3>Free Shipping</h3>
        </div>
        <div className=' flex justify-between py-4 border-b border-dark-gray *:font-medium'>
            <h3>Total</h3>
            <h3 className='text-lilac'>${totalPriceOfCart}</h3>
        </div>
    </div>
    <button className='w-full py-4 rounded-full text-white bg-lilac'>PLACE ORDER</button>
    </>
  )
}

export default Order