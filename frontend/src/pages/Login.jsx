import { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { data, useNavigate } from 'react-router-dom';
import { AppContent } from '../context/AppContext';
import axios from 'axios'
import {toast} from 'react-toastify'


const Login = () => {
  
  
  const navigate = useNavigate();
  const {userData, backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  const [state, setState] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
     try {
        e.preventDefault();
        axios.defaults.withCredentials = true

        
          const {data} = await axios.post(backendUrl + '/api/auth/login', {email, password})

          if(data.success){
            setIsLoggedin(true)
            getUserData() 
            navigate('/')
            toast.success(
              
              <div>
              
        🎉Congratulations{" "}
        <span
          onClick={() => navigate(`/user/`)}
          style={{ textDecoration: "none",textTransform:"capitalize", cursor: "pointer", color: "black" }}
        >
          {userData.name}
        </span>{" "} you have successfully logged in!
      </div>, {
              position: "top-center",
              autoClose: 3500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              icon:false,
              className: 'custom-toast',
             
             
                 
          });
          
            

          }
          else{
            toast.error(data.message)
        }
        
     } catch (error) {
      toast.error(data.message)
        
     }
  }

  return (
   
    <div className='flex justify-center items-center min-h-screen px-6 sm:px-0'>
  
      <div className='bg-main1 p-10 rounded-lg shadow-lg w-full sm:w-96
       text-blue-600 text-sm '>
        <h2 className='text-3xl font-semibold text-black text-center mb-3'  >
         Login to account!</h2>
        <p className='text-center text-sm mb-6'>
         Login to account!</p>


        <form onSubmit={onSubmitHandler}>
      
            
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-main2' >
            <img src={assets.mail_icon} />
            <input onChange={e => setEmail(e.target.value)} value={email} className='bg-transparent outline-none text-white ' type='email' placeholder='Email' required />

          </div>
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-main2' >
            <img src={assets.lock_icon} />
            <input onChange={e => setPassword(e.target.value)} value={password} className='bg-transparent outline-none text-white' type='password' placeholder='Password' required />

          </div>
          <p onClick={()=>navigate('/reset-password')} className='mb-4 text-black cursor-pointer'>Forgot Password?</p>
          <button className='w-full rounded-full py-2.5 bg-black
           to-indigo-900 text-white font-medium' >{state}</button>
        </form>

        {state === 'Sign Up' ? (<p className='text-gray-500 text-center text-sx mt-4'>Already have an account? {' '}
          <span onClick={()=>setState('Login')} className='text-blue-400 cursor-pointer underline'>Login here</span>
        </p>) : (<p className='text-gray-400 text-center text-sx mt-4'> Don't have an account? {' '}
          <span onClick={() => navigate('/checkmail')} className='text-blue-400 cursor-pointer underline'>Sign up</span>
        </p>)} 



      </div>
    </div>

  )
}

export default Login