import axios, { AxiosRequestConfig } from "axios";

export const config: AxiosRequestConfig = {
  method: 'GET',
  headers: {
    "x-rapidapi-host": "v3.football.api-sports .io",
    "x-rapidapi-key": 'b3e1bfd69bf73e4fa041710111dfb267'
  }
}

export const API = axios.create({
  baseURL: 'https://v3.football.api-sports.io'
})