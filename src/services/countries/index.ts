import { API, config } from "../API";

export interface ICountries {
  code: string;
  flag: string;
  name: string;
}

export const getCountries = async (apiKey?: string): Promise<ICountries[]> => {
  try {
    const { data } = await API.get('/countries', config(apiKey))
    return data.response
  } catch (error: any) {
    throw new Error(error)
  }
}
