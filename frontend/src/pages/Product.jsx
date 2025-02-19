import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopConText } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';
import { useNavbarFooterContext } from '../context/NavbarFooterContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgshowproduct from '../assets/bgshowproduct.png'


const Product = () => {
  const { showNavbarFooter } = useNavbarFooterContext();

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopConText);
  const [productData, setProductData] = useState(false);
  const [image,setImage] = useState('');

  const [quantity, setQuantity] = useState(1); // State to manage quantity
  
  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
 
 
  const fetchProductData = async () =>{
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
       
        return null;
      }
      
    })

  }
  useEffect(()=>{
    fetchProductData();
  },[productId, products])
  

  return productData ? (
    <div className='sm:px-[0vw] md:px-[0vw] lg:px-[0vw] m-auto'>
      {showNavbarFooter && <Navbar/>}
       
           <div 
            className="w-full h-[160px] bg-repeat-x bg-left-top"
            style={{
            
              backgroundImage: `url(${bgshowproduct})`,
             
            }}
          ></div>
    <div className='border-t-2 pt-10 top-10 transition-opacity ease-in duration-500 opacity-100'>
    {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item, index) => (
                  <img onClick={()=>(setImage(item))}  key={index} src={item} className='w-[24% sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ]' />
                ))
              }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img src={image} alt={productData.name} className='w-full h-auto object-cover'/>

          </div>

        </div>
        {/* Product Info */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2' >
              <img src={assets.star_icon} className='w-3 5' />
              <img src={assets.star_icon} className='w-3 5' />
              <img src={assets.star_icon} className='w-3 5' />
              <img src={assets.star_icon} className='w-3 5' />
              <img src={assets.star_icon} className='w-3 5' />
              
              {/* <img src={assets.star_dull_icon} className='w-3 5' /> */}
              <p className='pl-2'>(123)</p>

            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'> 
                <p>Select product quantity</p>
                <div className='flex gap-2'>
               
                    <input onChange={handleQuantityChange} className='border max-w-10 sm:max-w-20 px-1 sm:py-2 py-1' type="number" min={1} value={quantity} />
                    
                </div>

            </div>
            <button onClick={()=>addToCart(productData._id,quantity)} className='bg-red-600 text-white px-8 py-3 text-sm active:bg-gray-700 '> ADD TO CARD </button>
            <hr className='mt-8 sm:w-4/5' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>

            </div>
        </div>


      </div>
      {/* Description & Reviews Section */}
      {/* <div className='mt-20'>
          <div className='flex '>
                  <b className='border px-5 py-3 text-sm'>Description</b>
                  <p className='border px-5 py-3 text-sm'>Reviews (98)</p>

          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                  <p>  
                  Lorem ipsum dolor sit amet, consectetur adip nonum, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqu
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>  
                  Lorem ipsum dolor sit amet, consectetur adip nonum, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqu
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
          </div>

      </div> */}
    {/* Display Related Product */}
    <RelatedProduct category={productData.category} subCategory={productData.subCategory} />

    </div>
    {showNavbarFooter && <Footer/>}
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product