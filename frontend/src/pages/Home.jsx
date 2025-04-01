<<<<<<< HEAD
import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import { useNavbarFooterContext } from '../context/NavbarFooterContext';
=======
>>>>>>> 304f690 (fixloginsignup-admin)
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slides from '../components/Slides'
import { assets } from '../assets/assets'
<<<<<<< HEAD
const Home = () => {
  const { showNavbarFooter } = useNavbarFooterContext();

  return (
    <div className='sm:px-[0vw] md:px-[0vw] lg:px-[0vw] m-auto'>
      {showNavbarFooter && <Navbar/>}
       
      {/* Slide */}
      <Slides/>
      {/* Product */}
      <div className='max-w-[1400px]flex flex-col items-center justify-between'>
      <div className='mx-10 h-[500px]'>
        <h2 className='text-3xl text-[color:#333333]' >採れたて野菜</h2>
        <hr className='mt-3 border-t-4 border-[color:#796E48]' />
        <div className='flex w-full justify-between items-center my-10'>
            <img src={assets.sweet_potato} />
            <img src={assets.cabbage}/>
            <img src={assets.tomato}/>

        </div>
      </div>
      </div>
      {showNavbarFooter && <Footer/>}
 
      </div>
=======

const Home = () => {
  return (
    <div className='sm:px-[0vw] md:px-[0vw] lg:px-[0vw] m-auto'>
      <Navbar/>
      <Slides/>
      <div className='max-w-[1400px] flex flex-col items-center justify-between'>
        <div className='mx-10 h-[500px]'>
          <h2 className='text-3xl text-[color:#333333]'>採れたて野菜</h2>
          <hr className='mt-3 border-t-4 border-[color:#796E48]' />
          <div className='flex w-full justify-between items-center my-10'>
            <img src={assets.sweet_potato} alt="sweet potato" />
            <img src={assets.cabbage} alt="cabbage" />
            <img src={assets.tomato} alt="tomato" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
>>>>>>> 304f690 (fixloginsignup-admin)
  )
}

export default Home