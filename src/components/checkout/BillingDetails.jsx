import React from 'react'

const BillingDetails = () => {
    
  return (
    <>
    <h3 className='font-medium text-xl'>Billing Details</h3>
    <form action="">
        <div className='flex gap-8 mt-4 sm:flex-col'>
            <div className='flex flex-col w-full'>
                <label htmlFor="">First Name</label>
                <input type="text" className='border border-gray-200 h-12 p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
            </div>
            <div className='flex flex-col w-full'>
            <label htmlFor="">Last Name</label>
            <input type="text" className='border border-gray-200 h-12  p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
            </div>
        </div>
        <div className='flex flex-col w-full mt-4'>
        <label htmlFor="">Company Name</label>
            <input type="text" className='border border-gray-200 h-12  p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
        </div>
        <div className='flex flex-col w-full mt-4'>
            <label htmlFor="">Country</label>
            <select name="" id="" className='border border-gray-200 h-12 p-3 mt-2 outline-lilac md:text-sm sm:text-sm'>
                <option value="">Select a Country</option>
            </select>
        </div>
        <div className='flex flex-col w-full mt-4'>
        <label htmlFor="">Street Address</label>
            <input type="text" placeholder='House number and street name' className='border border-gray-200 h-12  p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
            <input type="text" placeholder='Apartment, suite, unit, etc' className='border border-gray-200 h-12  p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
        </div>
        <div className='flex flex-col w-full mt-4'>
        <label htmlFor="">Town / City</label>
            <input type="text" className='border border-gray-200 h-12  p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
        </div>
        <div className='flex gap-8 mt-4 sm:flex-col'>
            <div className='flex flex-col w-full'>
                <label htmlFor="">State / County</label>
                <input type="text" className='border border-gray-200 h-12 p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="">Postcode / ZIP</label>
                <input type="text" className='border border-gray-200 h-12  p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
            </div>
        </div>
        <div className='flex gap-8 mt-4 sm:flex-col'>
            <div className='flex flex-col w-full'>
                <label htmlFor="">Phone</label>
                <input type="number" className='border border-gray-200 h-12 p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="">Email Address</label>
                <input type="email" className='border border-gray-200 h-12  p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
            </div>
        </div>
        <div className=' mt-8'>
            <h3>Additional Information</h3>
            <p>Order notes</p>
            <textarea name="" id="" placeholder='Notes about your order, e.g special notes for delivery.' className='w-full border border-gray-200 h-40 p-3 mt-2 outline-lilac md:text-sm sm:text-sm'></textarea>
        </div>
    </form>
    </>
  )
}

export default BillingDetails