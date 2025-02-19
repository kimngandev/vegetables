
import { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopConText } from '../context/ShopContext';

const Navbar = () => {
    const [visible,setVisible] = useState(false);

    const {setShowSearch, getCartCount} = useContext(ShopConText);

  return (
     <div className='z-50 fixed w-full'>
        {/* MENU 1 */}
      <div className='flex flex-row-reverse h-10 items-center bg-white'>
        <ul className="hidden sm:flex gap-4 text-sm text-gray-800 mr-4">
             <NavLink to='/' className='flex flex-row items-center gap-4'>
                 <p className=''>会社概要</p>
                 <div className='bg-slate-800 w-[1px] h-4'></div>
             </NavLink>
             <NavLink to='/' className='flex flex-row items-center gap-4'>
                 <p className=''>ヘルプ</p>
                 <div className='bg-slate-800 w-[1px] h-4'></div>
             </NavLink>
             <NavLink to='/' className='flex flex-row items-center gap-4'>
                 <p className=''>ログイン</p>
                 <div className='bg-slate-800 w-[1px] h-4'></div>
             </NavLink>
             <NavLink to='/' className='flex flex-row items-center gap-4'>
                 <p className=''>会員登録</p>
                
             </NavLink>
       
       </ul>
        </div>
        {/* BRAND NAME */}
        <div className='flex justify-center items-center h-12 bg-main2 text-white'>
          <h1 className='text-center text-4xl'>
          エコファーム山口
          </h1>
        </div>
        {/* MENU 2*/}
        <div className='flex items-center justify-center py-5 font-medium w-full  z-50'>
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            <NavLink to='/' className=''>
            栽培方法
            </NavLink>
            <NavLink to='/' className=''>
            商品を見る
                

            </NavLink>
            <NavLink to='/' className=''>
            購入する
                

            </NavLink>
            {/* cart */}
            <Link to='/cart' className='relative'>
                <img src={assets.cart} className='w-5 min-w-5'/>
                <p className='absolute right-[-5px] top-[-5px] w-4 text-center leading-4 bg-red-600 text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>

        </ul>
        </div>
        {/* Sidebar menu for phone screen */}
    </div>
  )
}

export default Navbar