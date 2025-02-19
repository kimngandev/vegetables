const nodemailer = require('nodemailer');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

// Cấu hình email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Hàm tạo OTP 4 số
const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();

/**
 * Gửi mã OTP đến email
 * @param {string} email - Địa chỉ email người dùng
 * @returns {Promise<{ success: boolean, message: string }>}
 */
const sendOtp = async (email) => {
  try {
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + process.env.OTP_EXPIRY_MINUTES * 60000); // Thời gian hết hạn

    // Cập nhật hoặc tạo mới user với OTP
    const user = await User.findOneAndUpdate(
      { email },
      { otp, otpExpiry },
      { new: true, upsert: true } // Tạo mới nếu chưa tồn tại
    );

    // Gửi OTP qua email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP is: ${otp}`
    });

    return { success: true, message: 'OTP sent successfully' };
  } catch (error) {
    console.error('Error sending OTP:', error);
    return { success: false, message: 'Failed to send OTP' };
  }
};

module.exports = sendOtp;
