import mongoose from "mongoose";

const connectDB = async () => {
<<<<<<< HEAD

    mongoose.connection.on('connected',() => {
    console.log(`Mongo  DB connected`)
    })
    await mongoose.connect(`${process.env.MONGODB_URI}`)

}
=======
  try {
    // Add connection event handlers
    mongoose.connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

    // Connect with updated options
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    // Exit process with failure
    process.exit(1);
  }
};
>>>>>>> 304f690 (fixloginsignup-admin)

export default connectDB;