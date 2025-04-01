import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
    name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
=======
    name: { 
        type: String, 
        required: function() {
            return this.isRegistrationCompleted;
        }
    },
    furigana: { 
        type: String, 
        required: function() {
            return this.isRegistrationCompleted;
        }
    },
    birthDate: { type: String, required: false },
    postalCode: { 
        type: String, 
        required: function() {
            return this.isRegistrationCompleted;
        }
    },
    address: { 
        type: String, 
        required: function() {
            return this.isRegistrationCompleted;
        }
    },
    password: { 
        type: String, 
        required: function() {
            return this.isRegistrationCompleted;
        }
    },
    phoneNumber: { 
        type: String, 
        required: function() {
            return this.isRegistrationCompleted;
        }
    },
    gender: { type: String, required: false },
    email: { type: String, required: true, unique: true },
>>>>>>> 304f690 (fixloginsignup-admin)
    verifyOtp: { type: String, default: '' },
    verifyOtpExpireAt: { type: Number, default: 0 },
    isAccountVerified: { type: Boolean, default: false },
    resetOtp: { type: String, default: '' },
    resetOtpExpireAt: { type: Number, default: 0 },
<<<<<<< HEAD

=======
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    isEmailVerified: { type: Boolean, default: false },
    isPhoneVerified: { type: Boolean, default: false },
    isRegistrationCompleted: { type: Boolean, default: false }
>>>>>>> 304f690 (fixloginsignup-admin)
});

const userModel = mongoose.models.user || mongoose.model('user', userSchema);
export default userModel;
<<<<<<< HEAD
=======

>>>>>>> 304f690 (fixloginsignup-admin)
