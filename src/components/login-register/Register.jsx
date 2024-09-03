import React from 'react';
import Input from './Input';
import Button from './Button';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidations } from '../../validations/registerValidations';

function Register() {
    const {
        register, 
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(registerValidations)
    })

    const onSubmit = (data) =>{
        console.log(data);
        
        // clear form after submitting
        reset({
            username: '',
            password: '',
            email: ''
        })
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' border h-full w-[70%] shadow-md p-20 md:w-full md:p-20 sm:w-full sm:py-10 sm:px-4 ' >
        <div className=' mb-8 '>
            <Input type={'text'} placeholder={'Username'} name={'username'} register={register} />
            { errors.username && (
                <p className=' bg-red-500  '>{errors.username.message}</p>
            ) }
        </div>
        <div className='mb-8 '>
            <Input type={'password'} placeholder={'Password'} name={'password'} register={register} />
            { errors.password && (
                <p className=' bg-red-500  '>{errors.password.message}</p>
            )}
        </div>
        <div>
            <Input type={'email'} placeholder={'Email'} name={'email'} register={register} />
            { errors.email && (
                <p className=' bg-red-500  '>{errors.email.message }</p>
            ) }
        </div>
        

        <Button name={'REGISTER'} />
    </form>
  )
}

export default Register