import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
 <div className='bg-main2 text-white h-[20]'>
           <div className='flex flex-row justify-around items-center w-[100%] h-[16vh]  text-lg'>
                <Link to={onclick={}}>プライバシーポリシー</Link>
                <Link to={onclick={}}>ヘルプ</Link>
                <Link to={onclick={}}>利用規約</Link>
                <Link to={onclick={}}>公式SNS</Link>
           
          </div>
          <div className='flex justify-center items-center '>

              <Link  to={onclick={}}>©ecofarmyamaguchi</Link>
          </div>
          
          

    </div>
  )
}

export default Footer