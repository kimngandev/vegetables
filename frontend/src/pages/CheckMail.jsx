<<<<<<< HEAD
import  {useContext, useState } from 'react'
import { Await, Link, Router } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import * as validator from 'validator';
import { useNavigate } from "react-router-dom";
import { AppContent } from '../context/AppContext';
import { data } from 'react-router-dom';
import axios from 'axios'









const CheckMail = () => {
  
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const {backendUrl, getUserData } = useContext(AppContent);



  
=======
import { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AppContent } from '../context/AppContext';
import axios from 'axios'

const CheckMail = () => {
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { backendUrl } = useContext(AppContent);

  useEffect(() => {
    // Clear any existing registration data
    localStorage.removeItem('pendingRegistrationEmail');
    localStorage.removeItem('isOtpVerified');
  }, []);

>>>>>>> 304f690 (fixloginsignup-admin)
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

<<<<<<< HEAD
  
  const handleSubmit = async (e) => {
    e.preventDefault();

   
    setError('');
    setIsSuccess(false);

    
    if (!isValidEmail(email)) {
      setError('Email not valid!');
      return;
    }

    if (!isValidEmail(email2)) {
      setError('Email not valid!');
      return;
    }

    if (email === email2) {
      
        e.preventDefault();
        axios.defaults.withCredentials = true;

     
        const { data } = await axios.post(backendUrl + '/api/auth/register', {email});

        if (data.success) {
         
            getUserData() 
         
            navigate(``);
            toast.success("Emails match! Redirecting to OTP page...");
      
            setTimeout(() => {
              navigate("/signupOTP"); 
            }, 2000);
        } else {
          toast.error("Emails already exist. Please try again.");

        }



     

    } else {
      
      toast.error("Emails do not match. Please try again.");
    }

   

  }

  return (

    <div className='sm:px-[5vw] md:px-[0vw] lg:px-[0vw]'>

      <div className='flex relative flex-col'>
        <div className='flex flex-row h-[80vh]'>

=======
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!isValidEmail(email)) {
        toast.error('メールアドレスが無効です');
        return;
      }

      if (!isValidEmail(email2)) {
        toast.error('確認用メールアドレスが無効です');
        return;
      }

      if (email !== email2) {
        toast.error('メールアドレスが一致しません');
        return;
      }

      // First check if email exists
      const checkResponse = await axios.post(
        `${backendUrl}/api/auth/check-email`,
        { email },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (checkResponse.data.exists) {
        toast.error('このメールアドレスは既に登録されています');
        return;
      }

      // If email doesn't exist, send OTP
      const { data } = await axios.post(
        `${backendUrl}/api/auth/send-verify-otp`,
        { email },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (data.success) {
        localStorage.setItem('pendingRegistrationEmail', email);
        toast.success('認証コードを送信しました');
        setTimeout(() => {
          navigate('/signupOTP');
        }, 2000);
      } else {
        toast.error(data.message || 'エラーが発生しました');
      }
    } catch (error) {
      console.error('Registration error:', error);
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
    <div className='sm:px-[5vw] md:px-[0vw] lg:px-[0vw]'>
      <div className='flex relative flex-col'>
        <div className='flex flex-row h-[80vh]'>
>>>>>>> 304f690 (fixloginsignup-admin)
          {/* Step Sign Up */}
          <div className='w-[25%] bg-main1 flex-row'>
            <div className="flex flex-row items-center mt-8 ml-3">
              <div className='w-10 h-10 rounded-full flex items-center justify-center bg-black text-white text-lg mr-2'>
                <p>1</p>
              </div>
              <p className=''>メールアドレス登録</p>
<<<<<<< HEAD
              {/* <div className="ml-4 w-1 h-16 bg-black"></div> */}

            </div>
            <div className="bg-black w-1 h-[4rem] ml-[1.85rem]">

            </div>

            <div className="flex flex-row  items-center ml-3">
=======
            </div>
            <div className="bg-black w-1 h-[4rem] ml-[1.85rem]"></div>

            <div className="flex flex-row items-center ml-3">
>>>>>>> 304f690 (fixloginsignup-admin)
              <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white text-black mr-2'>
                <p>2</p>
              </div>
              <p className=''>認証コード入力</p>
<<<<<<< HEAD

            </div>
            <div className="bg-black w-1 h-[4rem] ml-[1.85rem]">

            </div>
=======
            </div>
            <div className="bg-black w-1 h-[4rem] ml-[1.85rem]"></div>
>>>>>>> 304f690 (fixloginsignup-admin)

            <div className="flex flex-row items-center ml-3">
              <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white text-black mr-2'>
                <p>3</p>
              </div>
              <p className=''>会員情報登録</p>
<<<<<<< HEAD
              {/* <div className="absolute top-1/2 -mt-10 w-2 h-20 bg-black"></div> */}
            </div>



          </div>
          {/* Form Sign Up */}
          <div className='flex flex-col w-[75%] bg '>
            <div className='font-semibold text-xl mt-8 ml-6'>
              <h2 >メールアドレス登録</h2>
            </div>

            <div className='w-[100%] h-[100%] mt-24'>


              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-4 w-[100%] '>
                <div className='flex flex-row justify-start'>

=======
            </div>
          </div>

          {/* Form Sign Up */}
          <div className='flex flex-col w-[75%] bg'>
            <div className='font-semibold text-xl mt-8 ml-6'>
              <h2>メールアドレス登録</h2>
            </div>

            <div className='w-[100%] h-[100%] mt-24'>
              <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-[100%]'>
                <div className='flex flex-row justify-start'>
>>>>>>> 304f690 (fixloginsignup-admin)
                  <div className='font-normal text-center w-[35%]'>
                    <p>メールアドレス登録</p>
                  </div>

<<<<<<< HEAD

                  <div className='flex flex-col gap-4 w-[100%] ml-10'>
                    <input type="email"

                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='font-normal text-center w-[80%] px-4 py-2 border rounded-md border-gray-800' placeholder='example@icloud.com' required />

                    <input type="email"

                      id="email2"
                      value={email2}
                      onChange={(e) => setEmail2(e.target.value)}
                      className='w-[80%] text-center  px-4 py-2 border rounded-md border-gray-800' placeholder='確認のため再度ご入力ください' required />

=======
                  <div className='flex flex-col gap-4 w-[100%] ml-10'>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='font-normal text-center w-[80%] px-4 py-2 border rounded-md border-gray-800'
                      placeholder='example@icloud.com'
                      required
                      disabled={isLoading}
                    />

                    <input
                      type="email"
                      value={email2}
                      onChange={(e) => setEmail2(e.target.value)}
                      className='w-[80%] text-center px-4 py-2 border rounded-md border-gray-800'
                      placeholder='確認のため再度ご入力ください'
                      required
                      disabled={isLoading}
                    />
>>>>>>> 304f690 (fixloginsignup-admin)
                  </div>
                </div>

                <div className='font-medium text-xs mt-4 ml-6'>
<<<<<<< HEAD
                  <p>
                    ※メールの受信拒否設定により、お手元に認証コードメールが届かないことがあります。
                  </p>
                  <p>
                    「<Link className='text-blue-600'> ＠メールアドレス</Link>」ドメインからのメールが受信できるよう設定をお願いいたします。
                  </p>
                </div>
        

                <div className='flex justify-center items-center'>

                  <button type='submit'

                    className='bg-black text-white  w-80 rounded-lg font-light px-6 py-4 mt-4'>メールで認証コードを送信する</button>
                  <ToastContainer />
                </div>


              </form>

            </div>



          </div>
          <ToastContainer />
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

export default CheckMail
=======
                  <p>※メールの受信拒否設定により、お手元に認証コードメールが届かないことがあります。</p>
                  <p>「<span className='text-blue-600'>＠メールアドレス</span>」ドメインからのメールが受信できるよう設定をお願いいたします。</p>
                </div>

                <div className='flex justify-center items-center'>
                  <button
                    type='submit'
                    className='bg-black text-white w-80 rounded-lg font-light px-6 py-4 mt-4'
                    disabled={isLoading}
                  >
                    {isLoading ? '送信中...' : 'メールで認証コードを送信する'}
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

export default CheckMail;
>>>>>>> 304f690 (fixloginsignup-admin)
