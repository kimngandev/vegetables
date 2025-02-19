import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
  const [selectedDay, setSelectedDay] = useState('');

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className='flex flex-col w-[100%]'>
          <div className='flex flex-row '>
           
           {/* Step Sign Up */}
            <div className='w-[25%] bg-main1 flex-row' >
              <div className="flex flex-row items-center mt-8 ml-3">
                  <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white text-black text-lg mr-2'>
                    <p>1</p>
                  </div>
                  <p className=''>メールアドレス登録</p>
               
    
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
                  <div className='w-10 h-10 rounded-full flex items-center justify-center bg-black text-white mr-2'>
                    <p>3</p>
                  </div>
                  <p className=''>会員情報登録</p>
                 
              </div>
    
              
    
            </div>
            {/* Form Sign Up */}
            <div className='flex flex-col w-[75%] h-auto '>
                 <div className='font-semibold text-xl mt-8 ml-6'>
                    <h2 >会員情報登録</h2>
                 </div>
                 
              <form className='flex flex-col gap-4 w-[100%] mt-20 ml-20'>
                

                  <div className='flex flex-col font-normal '>
                    <div className='flex w-[50%]'>
                    <p className='font-medium text-[16px]'>お名前</p>
                    <div className='flex items-center ml-2 font-light rounded-md pl-1 pr-1 text-xs text-white bg-red-500'>

                    <p className=''>必須</p>
                    </div>
                    </div>
                    <input type='text' className='font-normal text-center w-[60%] px-4 py-2 mt-2 border rounded-md border-gray-800' placeholder='山口太郎' required />

                  </div>
                  <div className='flex flex-col font-normal '>
                    <div className='flex w-[50%]'>
                    <p className='font-medium text-[16px]'>フリガナ</p>
                    <div className='flex items-center ml-2 font-light rounded-md pl-1 pr-1 text-xs text-white bg-red-500'>

                    <p className=''>必須</p>
                    </div>
                    </div>
                    <input type='text' className='font-normal text-center w-[60%] px-4 py-2 mt-2 border rounded-md border-gray-800' placeholder='ヤマグチタロウ' required />

                  </div>
                 
                  {/* TEST DATE OF BIRTH */}
                  <div className='flex flex-col font-normal '>
                    <div className='flex w-[50%]'>
                    <p className='font-medium text-[16px]'>生年月日（数字８桁）</p>
                    <div className='flex items-center ml-2 font-light rounded-md pl-1 pr-1 text-xs text-white bg-black'>

                    <p className=''>任意</p>
                    </div>
                    </div>
                    <div className='flex flex-row gap-5'>
                    <input type='number'  id="day" name="day" min="1" max="31" className='font-normal text-center w-[10%] px-4 py-2 mt-2 border rounded-md border-gray-800' placeholder='01' required />
                   
                    <input type='number'  id="month" name="month" min="1" max="12" className='font-normal text-center w-[10%] px-4 py-2 mt-2 border rounded-md border-gray-800' placeholder='12' required />
                    <input type='number'  id="year" name="year" min="1901" max="2024" className='font-normal text-center w-[10%] px-4 py-2 mt-2 border rounded-md border-gray-800' placeholder='1980' required />

                    </div>
                  </div>
                   
                  
                  <div className='flex flex-col font-normal '>
                    <div className='flex w-[50%]'>
                    <p className='font-medium text-[16px]'>郵便番号（ハイフンなし）</p>
                    <div className='flex items-center ml-2 font-light rounded-md pl-1 pr-1 text-xs text-white bg-red-500'>

                    <p className=''>必須</p>
                    </div>
                    </div>
                    <input type='text' className='font-normal text-center w-[60%] px-4 py-2 mt-2 border rounded-md border-gray-800' placeholder='1234567' required />

                  </div>
                  <div className='flex flex-col font-normal '>
                    <div className='flex w-[50%]'>
                    <p className='font-medium text-[16px]'>住所</p>
                    <div className='flex items-center ml-2 border font-light rounded-md pl-1 pr-1 text-xs text-white border-red-500 bg-red-500'>

                    <p className=''>必須</p>
                    </div>
                    </div>
                    <input type='text' className='font-normal text-center w-[60%] px-4 py-2 mt-2 border rounded-md border-gray-800' placeholder='山口県周南市1-1○○マンション△△号室' required />

                  </div>
                  <div className='flex flex-col font-normal '>
                    <div className='flex w-[50%]'>
                    <p className='font-medium text-[16px]'>パスワード</p>
                    <div className='flex items-center ml-2 font-light rounded-md pl-1 pr-1 text-xs text-white bg-red-500'>

                    <p className=''>必須</p>
                    </div>
                    </div>
                    <input type='text' className='font-normal text-center w-[60%] px-4 py-2 mt-2 border rounded-md border-gray-800' placeholder='8~16字の英数字' required />

                  </div>
                  <div className='flex flex-col font-normal '>
                    <div className='flex w-[50%]'>
                    <p className='font-medium text-[16px]'>電話番号（ハイフンなし）</p>
                    <div className='flex items-center ml-2 border font-light rounded-md pl-1 pr-1 text-xs text-white border-red-500 bg-red-500'>

                    <p className=''>必須</p>
                    </div>
                    </div>
                    <input type='text' className='font-normal text-center w-[60%] px-4 py-2 mt-2 border rounded-md border-gray-800' placeholder='08012345678' required />

                  </div>
                  <div className='flex flex-col font-normal '>
                    <div className='flex w-[50%]'>
                    <p className='font-medium text-[16px]'>性別</p>
                    <div className='flex items-center ml-2 font-light rounded-md pl-1 pr-1 text-xs text-white bg-black'>

                    <p className=''>任意</p>
                    </div>
                    </div>
                    <div className='flex flex-row mt-2 '>
                    <div className="flex items-center">
    <label className=" text-sm font-medium ">男性</label>
    <input id="default-radio-1"  type="radio" value="" name="default-radio" 
    className="w-4 h-4 ml-2"/>
</div>
<div className="flex items-center ml-4">
    <label  className=" text-sm font-medium ">女性</label>
    <input checked id="default-radio-2" type="radio" value="" name="default-radio"
     className="w-4 h-4 ml-2" />
</div>
                    </div>
                
                   


                      
                      

                  </div>
                  

                  <div className='flex flex-col gap-4 w-[100%] ml-10'>

                  </div>
                

                <div className='font-medium text-xs mt-4 ml-6'>
                 
                </div>


                <div className='flex justify-center items-center pb-8'>

                <button className='bg-black text-white  w-80 rounded-lg font-light px-6 py-4 mt-4'>登録する</button>
                </div>


              </form>

                 
               
    
    
            </div>
           
          </div>
          <div className='flex flex-row justify-around items-center w-[100%] bg-main2 h-[140px] text-white text-lg'>
                <Link to={onclick={}}>プライバシーポリシー</Link>
                <Link to={onclick={}}>ヘルプ</Link>
                <Link to={onclick={}}>利用規約</Link>
                <Link to={onclick={}}>公式SNS</Link>
    
          </div> 
        </div>
  )
}

export default Register