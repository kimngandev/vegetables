import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import { useNavbarFooterContext } from '../context/NavbarFooterContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Home = () => {
  const { showNavbarFooter } = useNavbarFooterContext();

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {showNavbarFooter && <Navbar/>}
      
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
      {showNavbarFooter && <Footer/>}

      </div>
  )
}

export default Home