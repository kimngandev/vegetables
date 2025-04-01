import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
<<<<<<< HEAD
=======
import adminRouter from './routes/adminRoutes.js';
>>>>>>> 304f690 (fixloginsignup-admin)

const app = express();
const port = process.env.PORT || 8000;
connectDB();

// const allowedOrigins = ['http://localhost:5173/']

app.use(express.json());
app.use(cookieParser());
// app.use(cors({origin: allowedOrigins, credentials: true}));
app.use(cors({
    origin: ["http://localhost:5173"], // Cho phép frontend truy cập API
    methods: ["GET", "POST", "PUT", "DELETE"], // Cho phép các phương thức HTTP
    credentials: true
  }));
  

//API Endpoints
app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send('API is running on 8000');
});
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);


=======
    res.send('API is running on port 8000');
});
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
>>>>>>> 304f690 (fixloginsignup-admin)

app.get('/clear-cookie', (req, res) => {
    // Xóa cookie có tên 'myCookie'
    res.clearCookie('myCookie');
    res.send('Cookie đã xóa.');
});

app.listen(port, () => console.log(`Server running on http://localhost:8000`));