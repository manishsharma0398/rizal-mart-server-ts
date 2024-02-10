import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

enum UserRole {
  User = 'user',
  Vendor = 'vendor',
  Admin = 'admin',
}

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  blocked: boolean;
}

const userSchema = mongoose.Schema;

const User = new userSchema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: UserRole,
      default: UserRole.User,
    },
    blocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

User.pre('save', function async() {
  const salt = bcrypt.genSaltSync(Number(process.env.BCRYPT_SALT_ROUNDS));
  const hash = bcrypt.hashSync(this.password, salt);
  this.password = hash;
});

export default mongoose.model<IUser>('User', User);
