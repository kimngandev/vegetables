import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModels.js';
import transporter from '../config/nodemailer.js';
import { json } from 'express';

<<<<<<< HEAD
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
=======

>>>>>>> 304f690 (fixloginsignup-admin)

export const register = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.json({ success: false, message: 'Missing Email' });
    }
    try {
<<<<<<< HEAD
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.json({ success: false, message: 'User already exists' });
        }

        const otp = String(Math.floor(1000 + Math.random() * 9000));
        const otpExpireAt = Date.now() + 10 * 60 * 1000;

=======
        // Kiểm tra email đã hoàn thành đăng ký chưa
        const existingUser = await userModel.findOne({ 
            email,
            isRegistrationCompleted: true 
        });

        if (existingUser) {
            return res.json({ success: false, message: 'Email already exists' });
        }

        // Xóa user tạm thời cũ nếu có
        await userModel.deleteOne({ 
            email, 
            isRegistrationCompleted: false 
        });

        // Tạo OTP mới
        const otp = String(Math.floor(1000 + Math.random() * 9000));
        const otpExpireAt = Date.now() + 10 * 60 * 1000; // 10 phút

        // Tạo user tạm thời mới
>>>>>>> 304f690 (fixloginsignup-admin)
        const tempUser = new userModel({
            email,
            verifyOtp: otp,
            verifyOtpExpireAt: otpExpireAt,
<<<<<<< HEAD
            isAccountVerified: false
=======
            isAccountVerified: false,
            isRegistrationCompleted: false,
            name: '',
            furigana: '',
            birthDate: '',
            postalCode: '',
            address: '',
            password: '',
            phoneNumber: '',
            gender: ''
>>>>>>> 304f690 (fixloginsignup-admin)
        });

        await tempUser.save();

<<<<<<< HEAD
=======
        // Gửi OTP qua email
>>>>>>> 304f690 (fixloginsignup-admin)
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Account Verification OTP',
<<<<<<< HEAD
            text: `Your account verification OTP is ${otp}`
        };
        await transporter.sendMail(mailOptions);

        return res.json({ success: true, message: 'Verification OTP sent on Email', userId: tempUser._id });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
=======
            text: `Your account verification OTP is ${otp}. This OTP will expire in 10 minutes.`
        };
        await transporter.sendMail(mailOptions);

        return res.json({ 
            success: true, 
            message: 'Verification OTP sent to your email',
            userId: tempUser._id 
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.json({ success: false, message: error.message });
    }
};  

>>>>>>> 304f690 (fixloginsignup-admin)


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
<<<<<<< HEAD
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
=======
        const { email } = req.body;

        if (!email) {
            return res.json({ success: false, message: 'Email is required' });
        }

        // Find existing user or create a new one
        let user = await userModel.findOne({ email });

        if (!user) {
            // Create new temporary user
            user = new userModel({
                email,
                isAccountVerified: false,
                isRegistrationCompleted: false
            });
        } else if (user.isRegistrationCompleted) {
            return res.json({ success: false, message: 'This email is already registered' });
        }

        // Generate and save new OTP
        const otp = String(Math.floor(1000 + Math.random() * 9000));
        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 10 * 60 * 1000; // 10 minutes

        await user.save();

        // Send OTP via email
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: '認証コード',
            text: `認証コード: ${otp}\n\nこの認証コードは10分後に期限切れとなります。`
        };
        await transporter.sendMail(mailOptions);

        return res.json({ 
            success: true, 
            message: '認証コードを送信しました',
            userId: user._id 
        });

    } catch (error) {
        console.error('Send OTP error:', error);
        return res.json({ 
            success: false, 
            message: error.message || 'エラーが発生しました' 
        });
>>>>>>> 304f690 (fixloginsignup-admin)
    }
}

//Verify OTP
export const verifyOtp = async (req, res) => {
<<<<<<< HEAD
    const { userId, otp } = req.body;

    if (!userId || !otp) {
        return res.json({ success: false, message: 'Missing Details' });
    }
    try {
        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({ success: false, message: 'User not found!' })
=======
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.json({ success: false, message: 'Missing email or OTP' });
    }
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: 'User not found!' });
>>>>>>> 304f690 (fixloginsignup-admin)
        }

        if (user.verifyOtp === '' || user.verifyOtp !== otp) {
            return res.json({ success: false, message: 'Invalid OTP' });
        }
        if (user.verifyOtpExpireAt < Date.now()) {
<<<<<<< HEAD
            return res.json({ success: false, message: 'OTP Expired' });
        }
        user.isAccountVerified = true;
        user.verifyOtp = '';
        user.verifyOtpExpireAt = 0;
        await user.save();
        return res.json({ success: true, message: 'Account verified successfully' });


    } catch (error) {
=======
            return res.json({ success: false, message: 'OTP has expired' });
        }

        // Cập nhật thông tin user sau khi verify OTP thành công
        user.verifyOtpExpireAt = Date.now(); // Cập nhật thời gian verify
        user.isAccountVerified = true;       // Đánh dấu tài khoản đã được verify
        user.isEmailVerified = true;         // Đánh dấu email đã được verify
        user.verifyOtp = '';                 // Xóa OTP cũ
        await user.save();
        
        return res.json({ 
            success: true, 
            message: 'OTP verified successfully',
            userId: user._id 
        });

    } catch (error) {
        console.error('OTP verification error:', error);
>>>>>>> 304f690 (fixloginsignup-admin)
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
<<<<<<< HEAD
export const isAccountVerified = async (req, res) =>{
   try {
        return res.json({success:true});
   } catch (error) {
      res.json({success:false, message: error.message})
   }
}
=======
export const isAuth = async (req, res) => {
  try {
    // For now, just return success since we're handling public routes
    return res.status(200).json({
      success: true,
      message: "Access allowed"
    });
  } catch (error) {
    console.error('Error in isAuth:', error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};
>>>>>>> 304f690 (fixloginsignup-admin)

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
<<<<<<< HEAD
}
=======
}

export const completeRegistration = async (req, res) => {
    const { 
        email,
        name,
        furigana,
        day,
        month,
        year,
        postalCode,
        address,
        password,
        phone,
        gender
    } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: 'ユーザーが見つかりません' });
        }

        if (!user.isAccountVerified) {
            return res.json({ success: false, message: 'メールアドレスの確認が必要です' });
        }

        // Validate required fields
        if (!name || !furigana || !postalCode || !address || !password || !phone) {
            return res.json({ 
                success: false, 
                message: '必須項目を入力してください',
                validationErrors: {
                    name: !name ? '名前は必須です' : null,
                    furigana: !furigana ? 'フリガナは必須です' : null,
                    postalCode: !postalCode ? '郵便番号は必須です' : null,
                    address: !address ? '住所は必須です' : null,
                    password: !password ? 'パスワードは必須です' : null,
                    phoneNumber: !phone ? '電話番号は必須です' : null
                }
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Format birth date if all date components are present
        let birthDate = '';
        if (year && month && day) {
            birthDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        }

        // Update user information
        user.name = name;
        user.furigana = furigana;
        user.birthDate = birthDate;
        user.postalCode = postalCode;
        user.address = address;
        user.password = hashedPassword;
        user.phoneNumber = phone;
        user.gender = gender || '';
        user.isRegistrationCompleted = true;

        await user.save();

        return res.json({ 
            success: true, 
            message: '登録が完了しました' 
        });

    } catch (error) {
        console.error('Complete registration error:', error);
        if (error.name === 'ValidationError') {
            return res.json({ 
                success: false, 
                message: '入力内容を確認してください',
                validationErrors: Object.keys(error.errors).reduce((acc, key) => {
                    acc[key] = error.errors[key].message;
                    return acc;
                }, {})
            });
        }
        return res.json({ 
            success: false, 
            message: 'エラーが発生しました' 
        });
    }
}

export const checkEmail = async (req, res) => {
  try {
    const { email } = req.body;
    
    // Check if email exists and registration is completed
    const existingUser = await userModel.findOne({ 
      email, 
      isRegistrationCompleted: true 
    });

    return res.status(200).json({
      success: true,
      exists: !!existingUser
    });

  } catch (error) {
    console.error('Check email error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};
>>>>>>> 304f690 (fixloginsignup-admin)
