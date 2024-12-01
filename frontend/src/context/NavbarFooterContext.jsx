import React, { createContext, useState, useContext } from 'react';

const NavbarFooterContext = createContext();

export const NavbarFooterProvider = ({ children }) => {
    const [showNavbarFooter, setShowNavbarFooter] = useState(true);

    const toggleNavbarFooter = () => {
        setShowNavbarFooter(!showNavbarFooter);
    };

    const value = {
        showNavbarFooter,
        toggleNavbarFooter,
    };

    return (
        <NavbarFooterContext.Provider value={value}>
            {children}
        </NavbarFooterContext.Provider>
    );
};

export const useNavbarFooterContext = () => useContext(NavbarFooterContext);