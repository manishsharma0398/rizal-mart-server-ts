import 'dotenv/config';

export const PORT: number = parseInt(process.env.PORT!);
export const BCRYPT_SALT_ROUNDS = process.env
  .BCRYPT_SALT_ROUNDS! as unknown as number;
export const MONGO_URL = process.env.MONGO_URL!;
export const JWT_SECRET = process.env.JWT_SECRET!;

const ENVIRONMENT: { [index: number]: string } = {
  8000: 'Production',
  8001: 'Staging',
};

export const serverMessage: string = `${ENVIRONMENT[PORT]} server running on PORT:${PORT}`;
