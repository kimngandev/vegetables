<<<<<<< HEAD

=======
>>>>>>> 304f690 (fixloginsignup-admin)
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
<<<<<<< HEAD
import { ToastContainer, toast } from 'react-toastify';
=======
import { ToastContainer } from 'react-toastify';
>>>>>>> 304f690 (fixloginsignup-admin)
import 'react-toastify/dist/ReactToastify.css';
import SignupOTP from './pages/SignupOTP'
import Register from './pages/Register'
import 完了 from './pages/完了'
import Login from './pages/Login'
<<<<<<< HEAD
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
=======
import { NavbarFooterProvider } from './context/NavbarFooterContext';
import User from './pages/User'
import PrivateRoute from './components/PrivateRoute'
import { AppContextProvider } from './context/AppContext'
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ProductManagement from './pages/admin/ProductManagement';
import OrderManagement from './pages/admin/OrderManagement';
import UserManagement from './pages/admin/UserManagement';

const App = () => {
  return (
    <AppContextProvider>
      <NavbarFooterProvider>
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <ToastContainer />
          <SearchBar></SearchBar>
        </div>

        <Routes>
          {/* Public Routes - Accessible without login */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkmail" element={<CheckMail />} />
          <Route path="/signupOTP" element={<SignupOTP />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/showproduct" element={<ShowProduct />} />

          {/* Private Routes - Require login */}
          <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path="/完了" element={<PrivateRoute><完了 /></PrivateRoute>} />
          <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
          <Route path="/place-order" element={<PrivateRoute><PlaceOrder /></PrivateRoute>} />
          <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="orders" element={<OrderManagement />} />
            <Route path="users" element={<UserManagement />} />
          </Route>
        </Routes>
      </NavbarFooterProvider>
    </AppContextProvider>
>>>>>>> 304f690 (fixloginsignup-admin)
  )
}

export default App