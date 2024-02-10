import jsonWebToken from 'jsonwebtoken';
import { JWT_SECRET } from './constants';

export const generateToken = (data: { [index: string]: string }): string =>
  jsonWebToken.sign(data, JWT_SECRET, { expiresIn: '1d' });
