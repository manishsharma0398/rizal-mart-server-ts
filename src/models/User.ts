import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

import { BCRYPT_SALT_ROUNDS } from '@src/utils/constants';
import { UserDocument, UserRole } from '@src/utils/interfaces';

const User = new mongoose.Schema<UserDocument>(
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

User.pre('save', function async(this: UserDocument, next) {
  if (!this.isModified('password')) return next();

  const salt = bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS);
  const hash = bcrypt.hashSync(this.password, salt);
  this.password = hash;
  return next();
});

User.methods.didPasswordMatched = async function (
  password: string
): Promise<boolean> {
  const user = this as UserDocument;
  return await bcrypt.compare(password, user.password);
};

export default mongoose.model<UserDocument>('User', User);
