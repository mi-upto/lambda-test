// /src/api/client.js

import axios, { AxiosInstance, AxiosResponse } from "axios";
import camelCaseKeys from "camelcase-keys";

const SPLA2_API = "https://spla2.yuu26.com/";

export const client: AxiosInstance = axios.create({
  baseURL: SPLA2_API,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const data = camelCaseKeys(response.data, { deep: true });
    return { ...response.data, data };
  }
);
