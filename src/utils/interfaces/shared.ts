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

interface IContactNumbers {
  primary: string;
  secondary?: string;
}

interface IAddress {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface IVendor {
  user: mongoose.Schema.Types.ObjectId;
  tradingName: string;
  contactNumbers: IContactNumbers;
  address: IAddress;
  verified: boolean;
}

export interface VendorDocument extends IVendor, mongoose.Document {}
