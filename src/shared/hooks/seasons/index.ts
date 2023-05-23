import { useQuery } from "react-query";
import { getSeasons } from "../../../services/seasons";


export const useGetSeasons = () =>
  useQuery(['Seasons'], () => getSeasons());