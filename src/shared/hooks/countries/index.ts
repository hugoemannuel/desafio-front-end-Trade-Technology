import { useQuery } from "react-query";
import { getCountries } from "../../../services/countries";

export const useGetCountries = () =>
  useQuery(['Countries'], () => getCountries())