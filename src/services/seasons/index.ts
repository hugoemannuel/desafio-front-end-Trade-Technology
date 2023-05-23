import { API, config } from "../API";

export const getSeasons = async (): Promise<number[]> => {
  try {
    const { data } = await API.get('leagues/seasons', config)
    return data.response
  } catch (error: any) {
    throw new Error(error)
  }
}