import React, { useContext } from 'react';
import BillingDetails from './BillingDetails';
import Order from './Order';
import { AddToCartContext } from '../../context/AddToCartContext';

function CheckOut() {
const {cart, getTotalPriceForItem, getTotalPriceOfCart} = useContext(AddToCartContext)
  return (
    <div className=' flex gap-8 md:flex-col sm:flex-col '>
        <div className=' w-3/5 h-fit md:w-full sm:w-full '>
          <BillingDetails/>
        </div>
        <div className=' w-2/5 h-fit md:w-full sm:w-full '>
          <Order cart={cart} getTotalPriceForItem={getTotalPriceForItem} getTotalPriceOfCart={getTotalPriceOfCart} />
        </div>
    </div>
  )
}

export default CheckOut