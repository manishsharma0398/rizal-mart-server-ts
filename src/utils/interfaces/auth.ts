export interface registerUserBody {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}
export interface loginBody {
  email: string;
  password: string;
}
