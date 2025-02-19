
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import ShowProduct from './pages/ShowProduct'
import Cart from './pages/Cart'
import CheckMail from './pages/CheckMail'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignupOTP from './pages/SignupOTP'
import Register from './pages/Register'
import 完了 from './pages/完了'
import Login from './pages/Login'
import { NavbarFooterProvider, useNavbarFooterContext } from './context/NavbarFooterContext';
import Slides from './components/Slides'
import User from './pages/User'




const App = () => {
  return (


    <NavbarFooterProvider>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer />
        
        <SearchBar></SearchBar>

      </div>


      <Routes>
        <Route path='/' element={<Home />} />
       
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='/checkmail' element={<CheckMail />} />
        <Route path='/signupOTP' element={<SignupOTP />} />
        <Route path='/register' element={<Register />} />
        <Route path='/完了' element={<完了/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/user' element={<User/>} />
        

        

        <Route path='/showproduct' element={<ShowProduct/>}/>
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
   
    </NavbarFooterProvider>
  )
}

export default App