import React from 'react'
import { Link } from 'react-router-dom'
const SignupOTP = () => {
    return (
        <div className='flex flex-col w-[100%] '>
          <div className='flex flex-row w-[100%] h-[80vh]'>
           
           {/* Step Sign Up */}
            <div className='w-[25%] bg-main1 flex-row'>
              <div className="flex flex-row items-center mt-8 ml-3">
                  <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white text-black text-lg mr-2'>
                    <p>1</p>
                  </div>
                  <p className=''>メールアドレス登録</p>
               
    
              </div>
    
              <div className="flex flex-row  items-center mt-16 ml-3">
                  <div className='w-10 h-10 rounded-full flex items-center justify-center bg-black text-white mr-2'>
                    <p>2</p>
                  </div>
                  <p className=''>認証コード入力</p>
              
    
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
                                <input type='text' className='font-normal text-center w-12 px-1 py-4 border rounded-md border-gray-800' required/>
                                <input type='text' className='font-normal text-center w-12 px-1 py-4 border rounded-md border-gray-800' required/>
                                <input type='text' className='font-normal text-center w-12 px-1 py-4 border rounded-md border-gray-800' required/>
                                <input type='text' className='font-normal text-center w-12 px-1 py-4 border rounded-md border-gray-800' required/>
                                
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
        </div>
      )
}

export default SignupOTP