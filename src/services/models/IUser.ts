export interface IUser{
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    address?: {
      cep: string;
      logradouro: string;
      complement: string;
      city: string;
      uf: string
    }
  }