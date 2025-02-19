import React, { useState } from 'react'
import { Link, Router } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import * as validator from 'validator';
import { useNavigate } from "react-router-dom";




const CheckMail = () => {

  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();


  // Hàm kiểm tra định dạng email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset trạng thái
    setError('');
    setIsSuccess(false);

    // Kiểm tra định dạng email
    if (!isValidEmail(email1)) {
      setError('Email not valid!');
      return;
    }

    if (!isValidEmail(email2)) {
      setError('Email not valid!');
      return;
    }

    // So sánh hai email
    if (email1 === email2) {
      // Nếu email trùng khớp
      toast.success("Emails match! Redirecting to OTP page...");
      setTimeout(() => {
        navigate("/signupOTP"); // Chuyển hướng đến trang OTP
      }, 2000);
    } else {
      // Nếu email không trùng
      toast.error("Emails do not match. Please try again.");
    }

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
            <div className="bg-black w-1 h-[4rem] ml-[1.85rem]">

            </div>

            <div className="flex flex-row  items-center ml-3">
              <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white text-black mr-2'>
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
          <div className='flex flex-col w-[75%] bg '>
            <div className='font-semibold text-xl mt-8 ml-6'>
              <h2 >メールアドレス登録</h2>
            </div>

            <div className='w-[100%] h-[100%] mt-24'>


              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-4 w-[100%] '>
                <div className='flex flex-row justify-start'>

                  <div className='font-normal text-center w-[35%]'>
                    <p>メールアドレス登録</p>
                  </div>


                  <div className='flex flex-col gap-4 w-[100%] ml-10'>
                    <input type="email"

                      id="email1"
                      value={email1}
                      onChange={(e) => setEmail1(e.target.value)}
                      className='font-normal text-center w-[80%] px-4 py-2 border rounded-md border-gray-800' placeholder='example@icloud.com' required />

                    <input type="email"

                      id="email2"
                      value={email2}
                      onChange={(e) => setEmail2(e.target.value)}
                      className='w-[80%] text-center  px-4 py-2 border rounded-md border-gray-800' placeholder='確認のため再度ご入力ください' required />

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
                {/* {error && (toast.error('Email not verify!', {

                 
                }
                
                )
                
                )
                
                }

                {isSuccess && (toast.success('Email verify!')
                 
                )} */}

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