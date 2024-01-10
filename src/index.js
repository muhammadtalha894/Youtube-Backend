// import mongoose from 'mongoose';
// // import { DB_NAME } from './constant';
// import express from 'express';
import connectDB from './db/index.js';
import dotenv from 'dotenv';

dotenv.config({
  path: './env',
});

connectDB();

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on((error) => {
//       console.log('ERROR : ', error);
//       throw error;
//     });c
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log('You Good Error', error);
//     throw error;
//   }
// })();
