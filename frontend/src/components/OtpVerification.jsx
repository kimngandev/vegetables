// components/OtpVerification.js
import  { useState } from 'react';
import { useOtp } from '../contexts/OtpContext';

const OtpVerification = ({ onSuccess, purpose = 'email_verification' }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('email'); // 'email' | 'otp'
  
  const {
    loading,
    error,
    isVerified,
    sendOtp,
    verifyOtp,
    resetOtpState
  } = useOtp();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const result = await sendOtp(email, purpose);
    if (result.success) {
      setStep('otp');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const result = await verifyOtp(otp);
    if (result.success) {
      onSuccess?.();
    }
  };

  const handleRetry = () => {
    setStep('email');
    setOtp('');
    resetOtpState();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {step === 'email' ? (
        <form onSubmit={handleSendOtp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Verifying....' : 'Confirm'}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Import OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-center text-2xl"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Verifying....' : 'Confirm'}
          </button>
          <button
            type="button"
            onClick={handleRetry}
            className="w-full mt-2 text-blue-500 hover:text-blue-600"
          >
            Resend OTP
          </button>
        </form>
      )}
    </div>
  );
};

export default OtpVerification;