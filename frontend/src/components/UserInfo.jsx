import { useContext } from 'react'
import { AppContent } from '../context/AppContext'

const UserInfo = () => {
    const {userData} = useContext(AppContent)

  return (
  
    <>

    <div className='flex justify-center items-center'>
         <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>
            Hey {userData ? userData.name : 'Developer'} !
          
        </h1>
        <h2>Welcome to our app</h2>
        
    </div>
 
    </>
    
  )
}

export default UserInfo