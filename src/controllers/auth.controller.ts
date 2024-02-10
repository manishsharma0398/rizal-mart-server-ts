import { Request, Response } from 'express';
import { loginBody, registerUserBody } from '@interfaces/index';

import User from '@src/models/User';
import { generateToken } from '@src/utils/jwt';
import { sendEmail } from '@src/utils/mailer';

export const registerUser = async (req: Request, res: Response) => {
  const {
    email,
    confirmPassword: password2,
    password,
  }: registerUserBody = req.body;

  if (password !== password2)
    return res
      .status(400)
      .json({ message: 'Passwords do not match', success: false });

  const userAlreadyRegistered = await User.findOne({ email });

  if (userAlreadyRegistered)
    return res
      .status(400)
      .json({ message: 'User already registered', success: false });

  const { confirmPassword, ...rest } = req.body;

  const data = await User.create(rest);

  await sendEmail(email);

  return res
    .status(201)
    .json({ message: 'User created successfully', data, success: true });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password }: loginBody = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(404).json({ message: 'User not found', success: false });

  if (!(await user.didPasswordMatched(password)))
    return res
      .status(400)
      .json({ message: 'Password Incorrect', success: false });

  if (user.blocked) {
    return res.status(400).json({ message: 'User is blocked', success: false });
  }

  const token = generateToken({
    id: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
  });

  return res.status(200).json({ data: token, success: true });
};
