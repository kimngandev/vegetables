import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopConText = createContext();

const ShopContextProvider = (props) => {
    const currency = '';
    const delivery_fee = 'Free';
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate(); 
    
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        delete cartData[itemId];
        setCartItems(cartData);
    };
    
    const addToCart = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        
        if (!cartData[itemId]) {
<<<<<<< HEAD
            cartData[itemId] = {};
        }
    
        cartData[itemId][quantity] = (cartData[itemId][quantity] || 0) + quantity;
    
        setCartItems(cartData);
=======
            cartData[itemId] = {
                quantity: quantity
            };
        } else {
            cartData[itemId].quantity = (cartData[itemId].quantity || 0) + quantity;
        }
    
        setCartItems(cartData);
        
        toast.success('商品をカートに追加しました', {
            position: "top-center",
            autoClose: 2000,
        });
>>>>>>> 304f690 (fixloginsignup-admin)
    };
    
    const getCartCount = () => {
        let totalCount = 0;
<<<<<<< HEAD
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]
                    }
                } catch (error) {}
=======
        for(const itemId in cartItems) {
            if (cartItems[itemId].quantity > 0) {
                totalCount += cartItems[itemId].quantity;
>>>>>>> 304f690 (fixloginsignup-admin)
            }
        }
        return totalCount;
    }
    
    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        
        if (quantity === 0) {
            delete cartData[itemId];
        } else {
<<<<<<< HEAD
            if (!cartData[itemId]) {
                cartData[itemId] = {};
            }
            cartData[itemId].quantity = quantity;
=======
            cartData[itemId] = {
                quantity: quantity
            };
>>>>>>> 304f690 (fixloginsignup-admin)
        }
        
        setCartItems(cartData);
    }
    
    const getCartAmount = () => {
        let totalAmount = 0;
<<<<<<< HEAD
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items);
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {}
=======
        for(const itemId in cartItems) {
            let itemInfo = products.find((product) => product._id === itemId);
            if (itemInfo && cartItems[itemId].quantity > 0) {
                totalAmount += itemInfo.price * cartItems[itemId].quantity;
>>>>>>> 304f690 (fixloginsignup-admin)
            }
        }
        return totalAmount;
    }

    const value = {
        products ,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        

       

    }
    return(
        <ShopConText.Provider value={value}>
            {
                props.children
            }
        </ShopConText.Provider>
    )

}


export default ShopContextProvider;