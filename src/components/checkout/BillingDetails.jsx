import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { billingDetailsValidation } from '../../validations/billingDetailsValidation';

const BillingDetails = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(billingDetailsValidation)
    });

    const onSubmit = (data) =>{
        console.log(data);
    }
  return (
    <>
    <h3 className='font-medium text-xl'>Billing Details</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-8 mt-4 sm:flex-col'>
            <div className='flex flex-col w-full'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id='firstName' {...register("firstName")} className='border border-gray-200 h-12 p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
                {errors.firstName && (
                    <p className=' bg-red-500  '>{errors.firstName.message}</p>)}
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id='lastName' {...register("lastName")} className='border border-gray-200 h-12  p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
                {errors.lastName && (
                    <p className=' bg-red-500  '>{errors.lastName.message}</p>)}
            </div>
        </div>
        <div className='flex flex-col w-full mt-4'>
        <label htmlFor="companyName">Company Name</label>
            <input type="text" id='companyName' {...register("companyName")} className='border border-gray-200 h-12  p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
        </div>
        <div className='flex flex-col w-full mt-4'>
            <label htmlFor="country">Country</label>
            <select name="" id="country" {...register("country")} className='border border-gray-200 h-12 p-3 mt-2 outline-lilac md:text-sm sm:text-sm'>
                <option value="">Select a Country</option>
            </select>
            {errors.country && (
                <p className=' bg-red-500  '>{errors.country.message}</p>)}
        </div>
        <div className='flex flex-col w-full mt-4'>
        <label htmlFor="streetAddress">Street Address</label>
            <input type="text" id='streetAddress' placeholder='House number and street name' {...register("address.street")} className='border border-gray-200 h-12  p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
            {errors.address?.street && (
                <p className=' bg-red-500  '>{errors.address.street.message}</p>
            )}
            <input type="text" placeholder='Apartment, suite, unit, etc' {...register("address.apartment")} className='border border-gray-200 h-12  p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
            {errors.address?.apartment && (
                <p className=' bg-red-500  '>{errors.address.apartment.message}</p>
            )}
        </div>
        <div className='flex flex-col w-full mt-4'>
        <label htmlFor="townOrCity">Town / City</label>
            <input type="text" id='townOrCity' {...register("townOrCity")} className='border border-gray-200 h-12  p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
            {errors.townOrCity && (
                <p className=' bg-red-500  '>{errors.townOrCity.message}</p>
            )}
        </div>
        <div className='flex gap-8 mt-4 sm:flex-col'>
            <div className='flex flex-col w-full'>
                <label htmlFor="stateOrCounty">State / County</label>
                <input type="text" id='stateOrCounty'{...register("stateOrCounty")} className='border border-gray-200 h-12 p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
                {errors.stateOrCounty && (
                <p className=' bg-red-500  '>{errors.stateOrCounty.message}</p>
            )}
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="postcodeOrZip">Postcode / ZIP</label>
                <input type="text" id='postcodeOrZip' {...register("postcodeOrZip")} className='border border-gray-200 h-12  p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
                {errors.postcodeOrZip && (
                <p className=' bg-red-500  '>{errors.postcodeOrZip.message}</p>
            )}
            </div>
        </div>
        <div className='flex gap-8 mt-4 sm:flex-col'>
            <div className='flex flex-col w-full'>
                <label htmlFor="phone">Phone</label>
                <input type="number" id='phone' {...register("phone")} className='border border-gray-200 h-12 p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
                {errors.phone && (
                <p className=' bg-red-500  '>{errors.phone.message}</p>
            )}
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="email">Email Address</label>
                <input type="email" id='email' {...register("email")} className='border border-gray-200 h-12  p-3 mt-2 outline-lilac md:text-sm sm:text-sm ' />
                {errors.email && (
                <p className=' bg-red-500  '>{errors.email.message}</p>
            )}
            </div>
        </div>
        <div className=' mt-8'>
            <h3>Additional Information</h3>
            <p>Order notes</p>
            <textarea name="" id="" {...register("additionalInformation")} placeholder='Notes about your order, e.g special notes for delivery.' className='w-full border border-gray-200 h-40 p-3 mt-2 outline-lilac md:text-sm sm:text-sm'></textarea>
        </div>
    </form>
    </>
  )
}

export default BillingDetails