import mongoose from 'mongoose';

export enum UserRole {
  User = 'user',
  Vendor = 'vendor',
  Admin = 'admin',
}

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserDocument extends IUser, mongoose.Document {
  role: string;
  blocked: boolean;
  didPasswordMatched(password: string): Promise<boolean>;
}
