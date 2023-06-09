import React from 'react'
import Slider from './HeroSection/Slider'

function HeroSection() {
  return (
    <div className='grow-3 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#1fa911cf] from-30% via-[#2F15D0] via-45% to-black to-90% text-white font-inter'>
        <div className='flex flex-col lg:flex-row justify-around items-center mt-16'>
           <div className="flex flex-col p-4">
            <img className='w-10 h-10 mx-2 pb-2' src='./vector.svg'/>
            <h4 className='text-neutral-50 font-medium text-2xl text-shadow my-6 mx-2'>Get notified when a highly correlated whale makes a move</h4>
            <p className='text-md my-6 mx-2 opacity-70 text-[#F2F2F2]'>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
           </div>
           <Slider/>
        </div>
        <div className='flex flex-col-reverse lg:flex-row  justify-around mt-16 '>
           <img src='./Cohorts.svg'/>
           <div className='text-right flex flex-col items-end p-4'>
            <img className='w-12 h-12 items-end'src='./eye.svg'/>
            <h4 className='text-neutral-50 font-medium  text-2xl shadow my-6 mx-2'>Watch what the whales are doing</h4>
            <p className='text-md my-6 mx-2 opacity-70 text-[#F2F2F2]'>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
           </div>
        </div>
        <div className=''>
         <h3 className='w-4/5 m-auto text-right w-fit-content font-medium text-2xl '>Testimonials</h3>
         <hr className='w-4/5 m-auto text-gray-50'/>
         <div className='flex overflow-x-scroll pb-12 ml-[10%] gap-4'>
            <img className='my-8 self-end justify-self-end' src='./design.svg'/>
            <div className='bg-white min-w-[375px] min-h-[125px] rounded-lg my-8 px-4'>
                <div className='flex gap-2 justify-left items-end w-full my-4'>
                  <h4 className='text-black font-semibold'>Jack F</h4>
                  <p className='text-gray-400 text-xs font-medium mb-1'>Ex Blackrock PM</p>
                </div>
                <p className='text-md leading-2 text-black mb-4'>“Love how Loch integrates portfolio analytics<br/> and whale watching <br/>into one unified app.”</p>
            </div>
            <div className='bg-white min-w-[375px] min-h-[125px] rounded-lg my-8 px-4'>
                <div className='flex gap-2 justify-left items-end w-full my-4'>
                  <h4 className='text-black font-semibold'>Yash P</h4>
                  <p className='text-gray-400 text-xs font-medium mb-1'>Research, 3poch Crypto Hedge Fund</p>
                </div>
                <p className='text-md leading-2 text-black mb-4'>“I use Loch everyday now. I don&apos;t think I could analyze crypto whale trends markets without it. 
                  I&apos;m addicted!”</p>
            </div>
            <div className='bg-white min-w-[375px] min-h-[125px] rounded-lg my-8 px-4'>
                <div className='flex gap-2 justify-left items-end w-full my-4'>
                  <h4 className='text-black font-semibold'>Shiv S</h4>
                  <p className='text-gray-400 text-xs font-medium mb-1'>Co-Founder Magik Labs</p>
                </div>
                <p className='text-md leading-2 text-black mb-4'>“Managing my own portfolio is helpful and well designed. What&apos;s really interesting is watching the whales though. No one else has made whale tracking so simple.”</p>
            </div>
         </div>
        </div>
    </div>
  )
}

export default HeroSection