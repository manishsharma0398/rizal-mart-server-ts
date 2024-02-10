import { sendEmail } from '../mailer';

export default function (userName: string, emails: string[]): void {
  const mailBody = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Our Platform!</title>
      <style>
        /* Add your CSS styles here */
      </style>
    </head>
    <body>
      <div>
        <h1>Welcome to Our Platform!</h1>
        <p>Dear ${userName},</p>
        <p>Thank you for registering with us. We are excited to have you on board!</p>
        <p>Your email: ${emails[0]}</p>
        <p>Feel free to explore our platform and let us know if you have any questions.</p>
        <p>Best regards,</p>
        <p>Rizal Mart Team</p>
      </div>
    </body>
    </html>`;
  sendEmail(emails, 'Welcome to Rizal Mart', mailBody);
}
