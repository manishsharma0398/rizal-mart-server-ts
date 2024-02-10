import { Request, Response } from 'express';
import { loginBody, registerUserBody } from '@interfaces/index';
import User from '@src/models/User';

export const registerUser = async (req: Request, res: Response) => {
  const { email, confirmPassword }: registerUserBody = req.body;

  const userAlreadyRegistered = await User.findOne({ email });

  if (userAlreadyRegistered)
    return res.json({ message: 'User already registered' });

  const data = await User.create(...confirmPassword, req.body);

  return res
    .status(201)
    .json({ message: 'User created successfully', data, success: true });
};

export const loginUser = (req: Request, res: Response) => {
  const { email, password }: loginBody = req.body;
  return res.json({ email, password });
};
