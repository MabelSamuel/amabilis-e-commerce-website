import React from 'react'
import BillingDetails from './BillingDetails'
import Order from './Order'

function CheckOut() {
  return (
    <div className=' flex gap-8 '>
        <div className=' w-3/5 h-fit '>
          <BillingDetails/>
        </div>
        <div className=' w-2/5 h-fit '>
          <Order/>
        </div>
    </div>
  )
}

export default CheckOut