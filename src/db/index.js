import mongoose from 'mongoose';
import DB_NAME from '../constant.js';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log('MongoDB Connected ', connection.connection.host);
  } catch (error) {
    console.log('ERROR : ', error);
  }
};

export default connectDB;
