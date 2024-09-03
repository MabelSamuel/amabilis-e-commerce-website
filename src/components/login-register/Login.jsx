import React from 'react';
import Input from './Input';
import { Link } from 'react-router-dom'
import Button from './Button';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidations } from '../../validations/loginValidations';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(loginValidations)
    })

    const onSubmit = (data) =>{
        console.log(data);

        // Clear the form fields
        reset({
            username: '',
            password: '',
            rememberMe: false,
        });
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' border h-full w-[70%] shadow-md p-20 md:w-full md:p-20 sm:w-full sm:py-10 sm:px-4 ' >
        <div className=' mb-8 '>
            <Input type={'text'} placeholder={'Username'} name={'username'} register={register} />
            { errors.username && (
                <p className=' bg-red-500  '>{errors.username.message}</p>
            )}
        </div>
        <div className=' mb-8 '>
            <Input type={'password'} placeholder={'Password'} name={'password'} register={register} />
            { errors.password && (
                <p className=' bg-red-500  '>{errors.password.message}</p>
            )}
        </div>
        <div className=' flex justify-between '>
            <div>
                <input type="checkbox" name='rememberMe' {...register('rememberMe')} />
                <span className=' ml-2 text-[0.938rem]'>Remember me</span>
            </div>
            <div>
                <Link className=' text-[0.938rem] '>Forgot password?</Link>
            </div>
        </div>

        <Button name={'LOGIN'} />
    </form>
  )
}

export default Login