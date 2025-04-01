import React, { useContext, useEffect, useState } from 'react'
import { ShopConText } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import { useNavbarFooterContext } from '../context/NavbarFooterContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Cart = () => {
  const { showNavbarFooter } = useNavbarFooterContext();

  const {products, currency, cartItems, updateQuantity, navigate} = useContext(ShopConText);
  
  const[cartData,setCartData] = useState([]);

<<<<<<< HEAD
  useEffect(()=>{
    
    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({
            _id: items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  },[cartItems])
=======
  useEffect(() => {
    const tempData = [];
    for(const itemId in cartItems) {
      if(cartItems[itemId].quantity > 0) {
        tempData.push({
          _id: itemId,
          quantity: cartItems[itemId].quantity
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);
>>>>>>> 304f690 (fixloginsignup-admin)

  return (
    <div className='border-t-4 sm:px-[0vw] md:px-[0vw] lg:px-[0vw] m-auto'>
       {showNavbarFooter && <Navbar/>}
     <div className='mt-[8em]'>
     <div className='text-2xl mt-16 mb-3'>
          <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
       {
            cartData.map((item, index) =>{
              const productData = products.find((product)=>product._id === item._id);
              
              return (
                <div key={index} className='py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                    <div className='flex items-start gap-6 '>
                        <img className='w-16 sm:w-20' src={productData.image[0]} alt=''/>
                        <div> 
                          <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                          <div className='flex items-center gap-5 mt-2'>
                              <p>{currency}{productData.price}</p>
                              {/* <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p> */}
                          </div>
                        </div>

                    </div>
<<<<<<< HEAD
                    <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:py-2 py-1' type="number" min={1} defaultValue={item.quantity} />
=======
                    <input 
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value === '' || value === '0') return;
                        updateQuantity(item._id, Number(value));
                      }} 
                      className='border max-w-10 sm:max-w-20 px-1 sm:py-2 py-1' 
                      type="number" 
                      min={1} 
                      value={item.quantity} 
                    />
>>>>>>> 304f690 (fixloginsignup-admin)
                    <img onClick={()=> updateQuantity(item._id,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt='' />
  

                </div>

              )
            })

       }
    
        
        
      </div>

      <div className="flex justify-end my-20">
            <div className="w-full sm:w-[450px]">
                <CartTotal/>
                <div className='w-full text-end'>
                    <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCESS TO CHECKOUT</button>
                </div>
            </div>

       </div>
     </div>
        {showNavbarFooter && <Footer/>}
    </div>
  )
}


export default Cart