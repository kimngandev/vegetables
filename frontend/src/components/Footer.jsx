import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Sed id justo in nunc dapibus commodo. Donec sed neque et arcu gravida pulvinar.
                  Sed vitae velit id justo facilisis tempus. Donec ullamcorper, 
                  mauris vel viverra condimentum, orci lacus semper mauris, 
                  vel elementum nunc ligula a velit.


                </p>
                
            </div>
            <div>
                <p  className=' text-xl font-medium mb-5'> COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privaxy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+123456789</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
        </div>
        
        <div>
            <hr/>
            <p className='py5 text-sm text-center'>Copyright 2024 by Kim. All right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer