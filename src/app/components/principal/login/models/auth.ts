export interface Login {
  name: string;
  password: string;
}

export interface CreateSignUp {
  name: string;
  password: string;
  role: string;
}

export const emptyCreateLogin: Login = {
  name: '',
  password: '',
};

export const emptyCreateSignUp: CreateSignUp = {
  name: '',
  password: '',
  role: '',
};
