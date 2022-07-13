export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  token: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  exp: string
}

export interface IAuthProvider {
  children: JSX.Element;
}

export interface IUserCurrent{
  id: number; 
  name: string;
  email: string;
  status: boolean;
}