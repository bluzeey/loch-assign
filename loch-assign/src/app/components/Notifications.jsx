import React from 'react'

function Notifications() {
  return (
    <div className='px-20 grow-2 min-h-screen mt-[25%] font-inter'>
      <div className='flex flex-col w-full h-full'>
      <p className='text-[39px] text-gray-300 leading-[46px] font-medium my-8'>Sign up for exclusive access.</p>
      <input className='p-4 text-black p-4 rounded-md border-2 border-[#E5E5E6] shadow-md' type='text' placeholder='Your email address'/>
      <button className='bg-gray-900 text-white rounded-md py-4 px-7 my-4'>Get Started</button>
      </div> 
      <p className='mt-10 w-full text-gray-900 text-md font-semibold leading-1'>You’ll receive an email with an invite link to join.</p>
    </div>
  )
}

export default Notifications