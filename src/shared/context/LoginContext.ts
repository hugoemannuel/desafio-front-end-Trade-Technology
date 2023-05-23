import { createContext } from 'react';
import { ICountries } from '../../services/countries';

export interface iLoginContext {
  countries?: ICountries[];
  apiKey?: string;
  setContries(value: undefined | ICountries[]): void;
  setApiKey(value: string | undefined): void;
}


const LoginContext = createContext({} as iLoginContext);

export default LoginContext;