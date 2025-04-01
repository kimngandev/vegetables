<<<<<<< HEAD
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {OtpProvider} from '../context/OtpContext'
import { useRef } from 'react'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'

const SignupOTP = () => {


 
  
  const handleKeyDown = (e, index) => {
    if(e.key === 'Backspace' && e.target.value === '' && index > 0){
      inputRefs.current[index-1].focus();
    }
  }


  const [values, setValues] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const newValue = e.target.value;
    if (/^\d?$/.test(newValue)) {
      const newValues = [...values];
      newValues[index] = newValue;
      setValues(newValues);

      if (newValue && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };
 
    return (
        <div className='flex flex-col w-[100%] '>
          {/* User Interface */}
          <div className='flex flex-row w-[100%] h-[80vh]'>
           
           {/* Step Sign Up */}
            <div className='w-[25%] bg-main1 flex-row'>
              <div className="flex flex-row items-center mt-8 ml-3">
                  <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white text-black text-lg mr-2'>
                    <p>1</p>
                  </div>
                  <p className=''>メールアドレス登録</p>
               
    
              </div>
              <div className="bg-black w-1 h-[4rem] ml-[1.85rem]">

</div>
    
              <div className="flex flex-row  items-center ml-3">
                  <div className='w-10 h-10 rounded-full flex items-center justify-center bg-black text-white mr-2'>
                    <p>2</p>
                  </div>
                  <p className=''>認証コード入力</p>
              
    
              </div>
              <div className="bg-black w-1 h-[4rem] ml-[1.85rem]">

</div>
    
              <div className="flex flex-row items-center ml-3">
                  <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white text-black mr-2'>
                    <p>3</p>
                  </div>
                  <p className=''>会員情報登録</p>
                  {/* <div className="absolute top-1/2 -mt-10 w-2 h-20 bg-black"></div> */}
              </div>
    
              
    
            </div>
            {/* Form Sign Up */}
            <div className='flex flex-col w-[75%] bg'>
                 <div className='font-semibold text-xl mt-8 ml-6'>
                    <h2 >認証コード入力</h2>
                 </div>
    
                 <div className='w-[100%] h-[100%] mt-10'> 
                      <form className='flex flex-col gap-4 w-[100%]'>
                          <div className='flex flex-col justify-start'>
    
                            <div className='font-normal ml-4'>
                              <p>メールに届いた認証コードをご入力ください</p>
                            </div>
    
                            <div className='flex flex-row gap-6 w-[100%] mt-6 items-center justify-center '>
                            <>
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          className="font-normal text-center w-12 px-1 py-4 border rounded-md border-gray-800"
          value={value}
          onChange={(e) => handleChange(index, e)}
          ref={(el) => (inputRefs.current[index] = el)}
          required
          onKeyDown={(e)=>handleKeyDown(e, index)}

        />
      ))}
    </>
                                
                             </div>
                          </div>
    
                          <div className='font-medium text-xs mt-4 items-start ml-6 flex flex-col'>
                            <p className=''>
                            メールが届かない場合は以下をご確認ください。
                            </p>
                            <ul className='list-disc'>
                                <li> 迷惑メールフォルダに振り分けられている。</li>
                                <li>メールの受信拒否設定をしている。</li>
                                <li>
                                    「<Link className='text-blue-600'> ＠メールアドレス</Link>」ドメインからのメールが受信できるよう設定いただき、再度認証コードメールの送信をお試しください。

                                </li>

                            </ul>
                            
                          </div>
                          
                          
                          <div className='flex justify-center items-center'>

                          <button className='bg-black text-white  w-80 rounded-lg font-light px-6 py-4 mt-4'>会員登録へ進む</button>
                          </div>
                           
                                        
                      </form>
    
                 </div>
               
    
    
            </div>
           
          </div>
          <div className='flex flex-row justify-around items-center w-[100%] bg-main2 h-[20vh] text-white text-lg'>
                <Link to={onclick={}}>プライバシーポリシー</Link>
                <Link to={onclick={}}>ヘルプ</Link>
                <Link to={onclick={}}>利用規約</Link>
                <Link to={onclick={}}>公式SNS</Link>
    
          </div> 
          {/* Import OTP code */}
          <OtpProvider>
            
          </OtpProvider>


        </div>
      )
}

export default SignupOTP
=======
import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppContent } from '../context/AppContext'
import axios from 'axios'

const SignupOTP = () => {
  const navigate = useNavigate();
  const { backendUrl } = useContext(AppContent);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  // Route protection
  useEffect(() => {
    const pendingEmail = localStorage.getItem('pendingRegistrationEmail');
    if (!pendingEmail) {
      toast.error('メールアドレスの確認が必要です');
      navigate('/checkmail');
      return;
    }
  }, [navigate]);

  const handleKeyDown = (e, index) => {
    if(e.key === 'Backspace' && e.target.value === '' && index > 0){
      inputRefs[index-1].current.focus();
    }
  }

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const otpValue = otp.join('');
      const email = localStorage.getItem('pendingRegistrationEmail');

      if (!email) {
        toast.error('メールアドレスの確認が必要です');
        navigate('/checkmail');
        return;
      }

      if (otpValue.length !== 4) {
        toast.error('認証コードは4桁の数字を入力してください');
        return;
      }

      const { data } = await axios.post(
        `${backendUrl}/api/auth/verify-otp`,
        { 
          email, 
          otp: otpValue,
          isRegistration: true 
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (data.success) {
        localStorage.setItem('isOtpVerified', 'true');
        toast.success('認証が完了しました');
        setTimeout(() => {
          navigate('/register');
        }, 2000);
      } else {
        toast.error(data.message || '認証コードが無効です');
      }
    } catch (error) {
      console.error('OTP verification error:', error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('エラーが発生しました。もう一度お試しください。');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col w-[100%]'>
      {/* User Interface */}
      <div className='flex flex-row w-[100%] h-[80vh]'>
        {/* Step Sign Up */}
        <div className='w-[25%] bg-main1 flex-row'>
          <div className="flex flex-row items-center mt-8 ml-3">
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white text-black text-lg mr-2'>
              <p>1</p>
            </div>
            <p className=''>メールアドレス登録</p>
          </div>
          <div className="bg-black w-1 h-[4rem] ml-[1.85rem]"></div>

          <div className="flex flex-row items-center ml-3">
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-black text-white mr-2'>
              <p>2</p>
            </div>
            <p className=''>認証コード入力</p>
          </div>
          <div className="bg-black w-1 h-[4rem] ml-[1.85rem]"></div>

          <div className="flex flex-row items-center ml-3">
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white text-black mr-2'>
              <p>3</p>
            </div>
            <p className=''>会員情報登録</p>
          </div>
        </div>

        {/* Form Sign Up */}
        <div className='flex flex-col w-[75%] bg'>
          <div className='font-semibold text-xl mt-8 ml-6'>
            <h2>認証コード入力</h2>
          </div>

          <div className='w-[100%] h-[100%] mt-10'> 
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-[100%]'>
              <div className='flex flex-col justify-start'>
                <div className='font-normal ml-4'>
                  <p>メールに届いた認証コードをご入力ください</p>
                </div>

                <div className='flex flex-row gap-6 w-[100%] mt-6 items-center justify-center'>
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      type="text"
                      className="font-normal text-center w-12 px-1 py-4 border rounded-md border-gray-800"
                      value={value}
                      onChange={(e) => handleChange(index, e.target.value)}
                      ref={inputRefs[index]}
                      required
                      disabled={isLoading}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                  ))}
                </div>
              </div>

              <div className='flex justify-center items-center'>
                <button
                  type="submit"
                  className='bg-black text-white w-80 rounded-lg font-light px-6 py-4 mt-4'
                  disabled={isLoading}
                >
                  {isLoading ? '認証中...' : '会員登録へ進む'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-around items-center bg-main2 h-[20vh] text-white text-lg'>
        <Link to="#">プライバシーポリシー</Link>
        <Link to="#">ヘルプ</Link>
        <Link to="#">利用規約</Link>
        <Link to="#">公式SNS</Link>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default SignupOTP;
>>>>>>> 304f690 (fixloginsignup-admin)
