import mongoose from 'mongoose';

import { VendorDocument } from '@src/utils/interfaces';

const Vendor = new mongoose.Schema<VendorDocument>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    tradingName: {
      type: String,
      required: true,
    },
    contactNumbers: {
      primary: {
        type: String,
        required: true,
      },
      secondary: {
        type: String,
      },
    },
    address: {
      addressLine1: { type: String, required: true },
      addressLine2: { type: String },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    verified: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<VendorDocument>('Vendor', Vendor);
