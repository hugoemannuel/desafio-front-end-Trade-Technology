import { API, config } from "../API";

export const getLeagues = async (teamName: string): Promise<any> => {
  try {
    const { data } = await API.get(`leagues?country=${teamName}`, config)
    return data.response
  } catch (error: any) {
    throw new Error(error)
  }
}