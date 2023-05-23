import { useQuery } from "react-query";
import { getCountries } from "../../../services/countries";

export const useGetCountries = (apiKey?: string) =>
  useQuery(['Countries'], () => getCountries(apiKey))