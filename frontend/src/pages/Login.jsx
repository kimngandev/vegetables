import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavbarFooterContext } from '../context/NavbarFooterContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {


  const [currentState, setCurrentState] = useState('Sign Up');
  const onSubmitHandler = async (event) => {
    event.preventDefault();

  }
  
  return (
    
    <div className='sm:px-[5vw] md:px-[0vw] lg:px-[0vw]'>
      
      <div className='flex relative flex-col'>
        <div className='flex flex-row h-[80vh]'>

          {/* Step Sign Up */}
          <div className='w-[25%] bg-main1 flex-row'>
            <div className="flex flex-row items-center mt-8 ml-3">
              <div className='w-10 h-10 rounded-full flex items-center justify-center bg-black text-white text-lg mr-2'>
                <p>1</p>
              </div>
              <p className=''>メールアドレス登録</p>
              {/* <div className="ml-4 w-1 h-16 bg-black"></div> */}

            </div>
            <div className="bg-black w-2 h-[4rem] ml-7">
                  
            </div>

            <div className="flex flex-row  items-center ml-3">
              <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white text-black mr-2'>
                <p>2</p>
              </div>
              <p className=''>認証コード入力</p>
              {/* <div className="ml-4 w-1 h-16 bg-black"></div> */}

            </div>

            <div className="flex flex-row items-center mt-16 ml-3">
              <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white text-black mr-2'>
                <p>3</p>
              </div>
              <p className=''>会員情報登録</p>
              {/* <div className="absolute top-1/2 -mt-10 w-2 h-20 bg-black"></div> */}
            </div>



          </div>
          {/* Form Sign Up */}
          <div className='flex flex-col w-[75%] bg '>
            <div className='font-semibold text-xl mt-8 ml-6'>
              <h2 >メールアドレス登録</h2>
            </div>

            <div className='w-[100%] h-[100%] mt-24'>

              {/* <form onSubmit= {onSubmitHandler} className='flex flex-col items-center sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 bg-white'>
                    <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                   <p className='prata-regular text-3xl'>{currentState}</p>
                    <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
                    </div>
                    {currentState === 'Login' ? '' : <input type='text' className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}

                  <input type='email' className='w-full px-4 py-2 border border-gray-800' placeholder='Email' required/>
                   <input type='password' className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
                    <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot your password</p>
          {
            currentState === 'Login'
            ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
            : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>

          }

       </div>
       <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
        

                  </form> */}

              <form className='flex flex-col gap-4 w-[100%] '>
                <div className='flex flex-row justify-start'>

                  <div className='font-normal text-center w-[35%]'>
                    <p>メールアドレス登録</p>
                  </div>

                  <div className='flex flex-col gap-4 w-[100%] ml-10'>
                    <input type='email' className='font-normal text-center w-[80%] px-4 py-2 border rounded-md border-gray-800' placeholder='example@icloud.com' required />
                    <input type='email' className='w-[80%] text-center  px-4 py-2 border rounded-md border-gray-800' placeholder='確認のため再度ご入力ください' required />

                  </div>
                </div>

                <div className='font-medium text-xs mt-4 ml-6'>
                  <p>
                    ※メールの受信拒否設定により、お手元に認証コードメールが届かないことがあります。
                  </p>
                  <p>
                    「<Link className='text-blue-600'> ＠メールアドレス</Link>」ドメインからのメールが受信できるよう設定をお願いいたします。
                  </p>
                </div>


                <div className='flex justify-center items-center'>

                <button className='bg-black text-white  w-80 rounded-lg font-light px-6 py-4 mt-4'>メールで認証コードを送信する</button>
                </div>


              </form>

            </div>



          </div>

        </div>
        <div className='flex flex-row justify-around items-center bg-main2 h-[20vh] text-white text-lg'>
          <Link to={onclick = {}}>プライバシーポリシー</Link>
          <Link to={onclick = {}}>ヘルプ</Link>
          <Link to={onclick = {}}>利用規約</Link>
          <Link to={onclick = {}}>公式SNS</Link>

        </div>
      </div>
     

      
    </div>
  )
}

export default Login