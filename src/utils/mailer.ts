import { transporter } from '@src/configs/mailer';
import { EMAIL_ID } from './constants';

export const sendEmail = async (
  to: string[],
  subject: string,
  html: string
) => {
  // send mail with defined transport object
  await transporter.sendMail({
    from: `Rizal Mart <${EMAIL_ID}>`, // sender address
    to, // list of receivers
    subject, // Subject line
    html, // html body
  });
};
