// contexts/OtpContext.js
import React, { createContext, useContext, useState } from 'react';

const OtpContext = createContext();

export const OtpProvider = ({ children }) => {
  const [otpState, setOtpState] = useState({
    email: '',
    isVerified: false,
    verificationId: null,
    purpose: null, // 'email_verification' | 'payment'
    error: null,
    loading: false
  });

  const sendOtp = async (email, purpose) => {
    try {
      setOtpState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await fetch('http://localhost:5000/api/otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, purpose })
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      setOtpState(prev => ({
        ...prev,
        email,
        verificationId: data.verificationId,
        purpose,
        loading: false
      }));

      return { success: true };
    } catch (error) {
      setOtpState(prev => ({
        ...prev,
        error: error.message,
        loading: false
      }));
      return { success: false, error: error.message };
    }
  };

  const verifyOtp = async (otp) => {
    try {
      setOtpState(prev => ({ ...prev, loading: true, error: null }));

      const response = await fetch('http://localhost:5000/api/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: otpState.email,
          otp,
          verificationId: otpState.verificationId,
          purpose: otpState.purpose
        })
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      setOtpState(prev => ({
        ...prev,
        isVerified: true,
        loading: false
      }));

      return { success: true };
    } catch (error) {
      setOtpState(prev => ({
        ...prev,
        error: error.message,
        loading: false
      }));
      return { success: false, error: error.message };
    }
  };

  const resetOtpState = () => {
    setOtpState({
      email: '',
      isVerified: false,
      verificationId: null,
      purpose: null,
      error: null,
      loading: false
    });
  };

  return (
    <OtpContext.Provider value={{
      ...otpState,
      sendOtp,
      verifyOtp,
      resetOtpState
    }}>
      {children}
    </OtpContext.Provider>
  );
};

export const useOtp = () => {
  const context = useContext(OtpContext);
  if (!context) {
    throw new Error('useOtp must be used within an OtpProvider');
  }
  return context;
};