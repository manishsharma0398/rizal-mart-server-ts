import nodemailer from 'nodemailer';

import { EMAIL_ID, EMAIL_PASSWORD, EMAIL_PORT } from '@src/utils/constants';

// create reusable transporter object using the default SMTP transport
export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: EMAIL_ID,
    pass: EMAIL_PASSWORD,
  },
});
