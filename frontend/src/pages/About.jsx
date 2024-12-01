import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Sed vel sem vel turpis pulvinar dignissim. 
                 Sed id consequat est, at pharetra nunc. Quisque eget velit vel 
                 turpis faucibus posuere. Sed non leo euismod, consectetur turpis vel, 
                 iaculis neque. 
              </p>
              <p>
                 Sed auctor tellus non tellus finibus, at tincidunt 
                 massa rutrum. Sed vel risus at felis eleifend facilisis. Donec dignissim,
                  velit vel consectetur placerat, ligula nisi tristique justo, et semper nisi 
                  velit vel turpis. Sed non neque eget turpis faucibus condimentum.
              </p>
              <b className='text-gray-800'>Our Mission</b>
              <p>
                 Sed auctor tellus non tellus finibus, at tincidunt 
                 massa rutrum. Sed vel risus at felis eleifend facilisis. Donec dignissim,
                  velit vel consectetur placerat, ligula nisi tristique justo, et semper nisi 
                  velit vel turpis. Sed non neque eget turpis faucibus condimentum.
              </p>
          </div>

      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>
                  Sed auctor tellus non tellus finibus, at tincidunt 
                 massa rutrum. Sed vel risus at felis eleifend facilisis. 
                </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>
                  Donec dignissim,
                  velit vel consectetur placerat, ligula nisi tristique justo, et semper nisi 
                  velit vel turpis. 
                 </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-600'>
                  Semper nisi 
                  velit vel turpis. Sed non neque eget turpis faucibus condimentum.
                </p>
          </div>
      </div>
    
      <NewsletterBox />
    </div>
  )
}

export default About