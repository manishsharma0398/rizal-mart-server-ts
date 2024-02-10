import nodemailer from 'nodemailer';

export const sendEmail = async (to: string) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'webdevmanish8@gmail.com',
      pass: process.env.GMAIL_KEY,
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: `Rizal Mart <>`, // sender address
    to, // list of receivers
    subject: 'data.subject', // Subject line
    text: 'data.text Helo', // plain text body
    html: 'data.htm', // html body
  });
};
