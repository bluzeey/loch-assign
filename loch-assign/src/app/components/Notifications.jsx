'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import { useFormik } from "formik";

function Notifications() {
  const Router=useRouter()
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: values => {
      Router.push('https://app.loch.one/welcome')
    }
  });
  return (
    <div className='px-20 grow-2 pt-[15%] min-h-screen font-inter'>
      <div className='flex flex-col w-full h-full'>
      <p className='text-[39px] text-gray-300 leading-[46px] font-medium my-8'>Sign up for exclusive access.</p>
      <form onSubmit={formik.handleSubmit} className='w-full'>
      <input id="email"
        name="email"
        type="email" 
        onChange={formik.handleChange}
        value={formik.values.email}
        required 
        className='p-4 text-black p-4 rounded-md border-2 border-[#E5E5E6] shadow-md w-full' placeholder='Your email address'/>
      <button type='submit' className='bg-gray-900 text-white rounded-md py-4 px-7 my-4 w-full'>Get Started</button>
      </form>
      <p className='mt-10 w-full text-gray-900 text-md font-semibold leading-1'>You&apos;ll receive an email with an invite link to join.</p>
      </div> 
    </div>
  )
}

export default Notifications