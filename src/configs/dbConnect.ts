import mongoose from 'mongoose';

import { MONGO_URL } from '@src/utils/constants';

export const connectToDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(MONGO_URL);
  } catch (error) {
    throw new Error(error as string);
  }
};

mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

mongoose.connection.on('error', (err) => {
  console.log(err);
  //   logEvents(
  //     `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
  //     'mongoErrLog.log'
  //   );
});

mongoose.connection.on('disconnected', () => {
  //   logEvents(`Disconnected From mongo`, 'mongoErrLog.log');
  console.log('Disconnected from mongo');
});
