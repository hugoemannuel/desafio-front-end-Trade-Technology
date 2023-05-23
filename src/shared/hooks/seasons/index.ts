import { useQuery } from "react-query";
import { getSeasons } from "../../../services/seasons";


export const useGetSeasons = (apiKey?: string) =>
  useQuery(['Seasons'], () => getSeasons(apiKey));