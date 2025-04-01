import axios from 'axios';
import {createContext, useEffect, useState} from 'react'
<<<<<<< HEAD
import { data } from 'react-router-dom';
=======
>>>>>>> 304f690 (fixloginsignup-admin)
import { toast } from 'react-toastify';

export const AppContent = createContext();

export const AppContextProvider = (props) =>{
    axios.defaults.withCredentials = true;

<<<<<<< HEAD
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [userData, setUserData] = useState(false)
=======
    const backendUrl = 'http://localhost:8000';
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [userData, setUserData] = useState(null)
>>>>>>> 304f690 (fixloginsignup-admin)

    const getAuthState = async () =>{
        try {
            const {data} = await axios.get(backendUrl + '/api/auth/is-auth/')
            if(data.success){
                setIsLoggedin(true)
                getUserData()
<<<<<<< HEAD
            }
        } catch (error) {
            toast.error(error.message)
=======
            } else {
                setIsLoggedin(false)
                setUserData(null)
            }
        } catch (error) {
            console.error('Auth state error:', error.response || error);
            setIsLoggedin(false)
            setUserData(null)
            // Only show error toast for specific auth errors, not for general auth check
            if (error.response?.status !== 401) {
                toast.error(error.response?.data?.message || error.message);
            }
>>>>>>> 304f690 (fixloginsignup-admin)
        }
    }

    const getUserData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/user/data')
<<<<<<< HEAD
            data.success ? setUserData(data.userData) : toast.error(data.message)
        } catch (error) {
            toast.error(data.message)
=======
            if (data.success) {
                setUserData(data.userData)
            }
        } catch (error) {
            console.error('User data error:', error.response || error);
            setUserData(null)
            // Only show error toast for specific user data errors
            if (error.response?.status !== 401) {
                toast.error(error.response?.data?.message || error.message);
            }
>>>>>>> 304f690 (fixloginsignup-admin)
        }
    }

    useEffect(()=>{
        getAuthState()
    },[])

    const value = {
        backendUrl,
<<<<<<< HEAD
        isLoggedin, setIsLoggedin,
        userData, setUserData,
        getUserData
        

=======
        isLoggedin, 
        setIsLoggedin,
        userData, 
        setUserData,
        getUserData,
        getAuthState
>>>>>>> 304f690 (fixloginsignup-admin)
    }

    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}