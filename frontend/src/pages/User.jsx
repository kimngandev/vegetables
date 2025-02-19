import UserInfo from '../components/UserInfo'
import Navbar from '../components/Navbar'
import { useContext} from 'react';
import {useNavigate} from 'react-router-dom'

import { assets } from '../assets/assets';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const User = () => {
  
  const navigate = useNavigate();
  const {userData, backendUrl, setUserData, setIsLoggedin} = useContext(AppContent)

  const sendVerificationOtp = async () =>{
    try {
      axios.defaults.withCredentials = true;

      const {data} = await axios.post(backendUrl + '/api/auth/send-verify-otp')
      if(data.success){
        navigate('/signupOTP')
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  const logout = async () =>{
    try {
      axios.defaults.withCredentials = true
      const {data} = await axios.post(backendUrl + '/api/auth/logout')
      data.success && setIsLoggedin(false)
      data.success && setUserData(false)
      navigate('/')

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div >
         <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-4 absolute top-0'>
        <img src={assets.sunlogo} alt='' className=''/>
        {
          userData ?  
          <div className='w-8 h-8 flex justify-center items-center bg-black text-white relative group rounded-full'>
              {userData.name[0].toUpperCase()}
              <div className='absolute hidden group-hover:block top-0 right-0 z-10
              text-black rounded pt-10'>
                  <ul className='list-none m-0 p-2 bg-gray-100 text-sm'>
                  {!userData.isAccountVerified && 
                    <li onClick={sendVerificationOtp} className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Verify email</li>}
                    <li onClick={logout} className='py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10'>Logout </li>
                  </ul>
              </div>
          </div>
        
       : <button onClick={()=>navigate('/login')} className='flex items-center gap-2 border border-gray-500 
        rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all'>
         <img src={assets.arrow_icon} ></img>
         Login
        </button> }
    </div>

        
       <div className='flex flex-col items-center justify-center h-screen bg-green-200'>
        
       <UserInfo />
       </div>
      

    </div>
  )
}

export default User