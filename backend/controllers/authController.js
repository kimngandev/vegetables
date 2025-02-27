import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModels.js';
import transporter from '../config/nodemailer.js';
import { json } from 'express';

// export const register = async (req, res) => {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         return res.json({ success: false, message: 'Missing Details' });         
//     }
//     try {

//         const exitingUser = await userModel.findOne({email});

//         if (exitingUser) {
//             return res.json({ success: false, message: 'User already exists' });
//         }

//         const hashPassword = await bcrypt.hash(password, 10);

//         const user = new userModel({
//             name,
//             email,
//             password: hashPassword
//         });
//         await user.save();
//         const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

//         res.cookie('token', token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production',
//             sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', 
//             maxAge: 7 * 24 * 60 * 60 * 1000
//         });

//          //Sending welcome email to user
//          const mailOptions = {
//             from: process.env.SENDER_EMAIL,
//             to: email,
//             subject: 'Welcome to our platform',
//             text: `Hello ${email}, welcome to our platform.`
//         };
//         await transporter.sendMail(mailOptions);

//         return res.json({ success: true, message: 'User created successfully' });

//     } catch (error) {
//         res.json({ success: false, message: error.message });
//     }
// }

export const register = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.json({ success: false, message: 'Missing Email' });
    }
    try {
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.json({ success: false, message: 'User already exists' });
        }

        const otp = String(Math.floor(1000 + Math.random() * 9000));
        const otpExpireAt = Date.now() + 10 * 60 * 1000;

        const tempUser = new userModel({
            email,
            verifyOtp: otp,
            verifyOtpExpireAt: otpExpireAt,
            isAccountVerified: false
        });

        await tempUser.save();

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Account Verification OTP',
            text: `Your account verification OTP is ${otp}`
        };
        await transporter.sendMail(mailOptions);

        return res.json({ success: true, message: 'Verification OTP sent on Email', userId: tempUser._id });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.json({ success: false, message: 'Email and password are require!' });
    }
    try {
        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({ success: false, message: 'Invalid email' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: 'Invalid password' });
        } 

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', 
            maxAge: 7 * 24 * 60 * 60 * 1000
        }); 
        
       

        return res.json({ success: true, message: 'Login success' });

    } catch (error) {
        res.json({ success: false, message: error.message });
        
    }
}

export const logout = (req, res) => {
   try {
         res.clearCookie('token',{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
         });
         return res.json({ success: true, message: 'Logged out' });
   } catch (error) {
         res.json({ success: false, message: error.message });
   }
}


//Sending OTP to user for verification
export const sendVerifyOtp = async (req, res) => {
    try {
        const { userId } = req.body;

        const user = await userModel.findById(userId);

        if (user.isAccountVerified) {
            return res.json({ success: false, message: 'Account already verified' });
        }

        const otp = String(Math.floor(1000 + Math.random() * 9000));
        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 10 * 60 * 1000;

        await user.save();
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Account Verification OTP',
            text: `Your account verification OTP is ${otp}`
        };
        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: 'Verification OTP sent on Email' });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

//Verify OTP
export const verifyOtp = async (req, res) => {
    const { userId, otp } = req.body;

    if (!userId || !otp) {
        return res.json({ success: false, message: 'Missing Details' });
    }
    try {
        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({ success: false, message: 'User not found!' })
        }

        if (user.verifyOtp === '' || user.verifyOtp !== otp) {
            return res.json({ success: false, message: 'Invalid OTP' });
        }
        if (user.verifyOtpExpireAt < Date.now()) {
            return res.json({ success: false, message: 'OTP Expired' });
        }
        user.isAccountVerified = true;
        user.verifyOtp = '';
        user.verifyOtpExpireAt = 0;
        await user.save();
        return res.json({ success: true, message: 'Account verified successfully' });


    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export const verifyEmail = async (req, res) => {
    const { userId, otp } = req.body;

    if (!userId || !otp) {
        return res.json({ success: false, message: 'Missing Details' });
    }

    try {
        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({ success: false, message: 'User not found!' })
        }
        if (user.verifyOtp === '' || user.verifyOtp !== otp) {
            return res.json({ success: false, message: 'Invalid OTP' })
        }
        if (user.verifyOtpExpireAt < Date.now()) {
            return res.json({ success: false, message: 'OTP Expired' })
        }

        user.isAccountVerified = true;
        user.verifyOtp = '';
        user.verifyOtpExpireAt = 0;
        await user.save();
        return res.json({ success: true, message: 'Account verified successfully' });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}
//Check if user  is authenticated
export const isAccountVerified = async (req, res) =>{
   try {
        return res.json({success:true});
   } catch (error) {
      res.json({success:false, message: error.message})
   }
}

//Send password reset OTP
export const sendResetOtp = async (req, res) =>{
    const {email} = req.body;

    if(!email){
        return res.json({success:false, message: 'Email is require!'})
    }
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success: false, message: 'User not found!'})
        }

        const otp = String(Math.floor(1000 + Math.random() * 9000));
        user.resetOtp = otp;
        user.resetOtpExpireAt = Date.now() + 10 * 60 * 1000;

        await user.save();
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Password Reset OTP',
            text: `Your OTP for resetting your password is ${otp}.
            Use this OTP to proceed with resetting your password.`
        };

        await transporter.sendMail(mailOptions);
        return res.json({success: true, message: 'OTP sent to your email'});



    } catch (error) {
        return res.json({success:false, message:error.message})
    }
}

//Reset User Password 
export const resetPassword = async(req, res)=>{
    const {email, otp, newPassword} = req.body;
    if(!email|| !otp || !newPassword){
        return res.json({success: false, message:'Email, OTP, and new Password are require'})
    }
    try {
        const user = await userModel.findOne({email});

        if(!user){
        return res.json({success: false, message: 'User not found!'});

        }

        if(user.resetOtp === "" || user.resetOtp !== otp){
            return res.json({success:false, message: 'Invalid OTP!'})
        }

        if(user.resetOtpExpireAt < Date.now()){
            return res.json({success:false, message: 'OTP Expired!'})
            
        }
        
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        
        user.password = hashedPassword;
        user.resetOtp = '';
        user.resetOtpExpireAt = 0;

        await user.save();

        return res.json({success:true, message: 'Password has been reset successfully!'});
        

    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}