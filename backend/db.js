import mongoose from 'mongoose';

import dontenv from 'dotenv';
dontenv.config();



const dbURI = process.env.MONGODB_URI;

export const dbConnection= async () => {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));
}
