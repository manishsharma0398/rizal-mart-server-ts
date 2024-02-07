import { Request, Response } from 'express';
import { loginBody, registerUserBody } from '@interfaces/index';

export const registerUser = (req: Request, res: Response) => {
  const {
    email,
    confirmPassword,
    firstName,
    lastName,
    password,
  }: registerUserBody = req.body;
  return res.json({ email, confirmPassword, password, firstName, lastName });
};

export const loginUser = (req: Request, res: Response) => {
  const { email, password }: loginBody = req.body;
  return res.json({ email, password });
};
