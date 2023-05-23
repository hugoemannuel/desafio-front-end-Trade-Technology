import { API, config } from "../API";

export interface ICountries {
  code: string;
  flag: string;
  name: string;
}

export const getCountries = async (): Promise<ICountries[]> => {
  try {
    const { data } = await API.get('countries', config)
    return data.response
  } catch (error: any) {
    throw new Error(error)
  }
}
