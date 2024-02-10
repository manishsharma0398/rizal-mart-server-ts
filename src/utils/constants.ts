import 'dotenv/config';

export const PORT: number = parseInt(process.env.PORT!);
export const BCRYPT_SALT_ROUNDS: number = parseInt(
  process.env.BCRYPT_SALT_ROUNDS!
);
export const MONGO_URL = process.env.MONGO_URL!;
export const JWT_SECRET = process.env.JWT_SECRET!;
export const EMAIL_PORT: number = parseInt(process.env.EMAIL_PORT!);
export const EMAIL_ID = process.env.EMAIL_ID!;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD!;

const ENVIRONMENT: { [index: number]: string } = {
  8000: 'Production',
  8001: 'Staging',
};

export const serverMessage: string = `${ENVIRONMENT[PORT]} server running on PORT:${PORT}`;
