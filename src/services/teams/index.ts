import { API, config } from "../API";

interface ITeam {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
}

interface IVenue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}

export interface ITeams {
  team: ITeam;
  venue: IVenue;
}


export const getTeams = async (apiKey?: string, league?: number, season?: null | number): Promise<ITeams[]> => {
  try {
    const { data } = await API.get(`teams?league=${Number(league)}&season=${Number(season)}`, config(apiKey));
    return data.response
  } catch (error: any) {
    throw new Error(error)
  }
}

