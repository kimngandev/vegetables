import nodeMailer from 'nodemailer';
const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: process.env.SMTP_USER,                  
        pass: process.env.SMTP_PASS,
    },
});
export default transporter;