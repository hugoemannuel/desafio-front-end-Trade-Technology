import { API, config } from "../API";

export const getSeasons = async (apiKey?: string): Promise<number[]> => {
  try {
    const { data } = await API.get('leagues/seasons', config(apiKey))
    return data.response
  } catch (error: any) {
    throw new Error(error)
  }
}