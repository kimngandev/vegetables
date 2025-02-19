import React from 'react'
import { useNavbarFooterContext } from '../context/NavbarFooterContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgshowproduct from '../assets/bgshowproduct.png'


const ShowProduct = () => {
  
  const { showNavbarFooter } = useNavbarFooterContext();
  return (
    <div className='sm:px-[0vw] md:px-[0vw] lg:px-[0vw]'>
    {showNavbarFooter && <Navbar/>}
   
     <div className=''>
     
       <div 
        className="w-full h-[160px] bg-repeat-x bg-left-top"
        style={{
        
          backgroundImage: `url(${bgshowproduct})`,
         
        }}
      ></div>
        <div className='max-w-[1400px]flex flex-col items-center justify-between mt-12 '>
             <div className='mx-10'>
               <h2 className='text-3xl text-[color:#333333]' >商品を見る</h2>
               <hr className='mt-3 border-t-4 border-[color:#796E48]' />
          
             </div>
             </div>
       
       </div>
       <div className='flex flex-row justify-center mt-6 p-20 gap-4'>
            <div className='w-[360px] h-[248px] bg-slate-300 rounded-2xl'>

            </div>
            <div className='flex flex-col justify-center w-[360px] h-[248px]'>
               <p>【有機栽培】玉ねぎ/1kg</p>
               <div className='flex flex-col ml-14'>
                  <p>【有機栽培】玉ねぎ/1kg</p>
                  <p>価格：550円</p>
                  <p>購入数</p>

               </div>

             </div>
       </div>
   
    

    
     
     
            
    
    {showNavbarFooter && <Footer/>}

    </div>
  )
}

export default ShowProduct