import { Request, Response } from 'express';
import { loginBody, registerUserBody } from '@interfaces/index';
import User from '@src/models/User';

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

  return res
    .status(201)
    .json({ message: 'User created successfully', data, success: true });
};

export const loginUser = (req: Request, res: Response) => {
  const { email, password }: loginBody = req.body;
  return res.json({ email, password });
};
