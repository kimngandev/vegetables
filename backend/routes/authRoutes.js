import express from 'express';
<<<<<<< HEAD
import { register, login, logout, sendVerifyOtp, verifyEmail, isAccountVerified,
         resetPassword, sendResetOtp,
 } from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/send-verify-otp',userAuth, sendVerifyOtp);
authRouter.post('/verify-account',userAuth,verifyEmail);
authRouter.get('/is-auth',userAuth, isAccountVerified );
authRouter.post('/send-reset-otp', sendResetOtp);
authRouter.post('/reset-password',resetPassword);

=======
import { register, login, logout, sendVerifyOtp, verifyOtp, verifyEmail, isAuth, sendResetOtp, resetPassword, completeRegistration, checkEmail } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/check-email', checkEmail);
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/send-verify-otp', sendVerifyOtp);
authRouter.post('/verify-otp', verifyOtp);
authRouter.post('/verify-email', verifyEmail);
authRouter.get('/is-auth', isAuth);
authRouter.post('/send-reset-otp', sendResetOtp);
authRouter.post('/reset-password', resetPassword);
authRouter.post('/complete-registration', completeRegistration);
>>>>>>> 304f690 (fixloginsignup-admin)

export default authRouter;