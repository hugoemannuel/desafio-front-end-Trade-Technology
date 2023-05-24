import { API, config } from "../API";
import { ICountries } from "../countries";

interface ISeasons {
  current: boolean;
  end: string;
  start: string;
  year: number;
}

interface ILeagues {
  id: number;
  logo: string;
  name: string;
  type: string;
}

export interface iLeaguesAndSeasons {
  country: ICountries;
  league: ILeagues;
  seasons: ISeasons[];

}

export const getLeagues = async (teamName: string, apiKey?: string): Promise<iLeaguesAndSeasons[]> => {
  try {
    const { data } = await API.get(`/leagues?search=${teamName}`, config(apiKey))
    return data.response
  } catch (error: any) {
    throw new Error(error)
  }
}