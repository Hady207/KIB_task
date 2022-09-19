import axios from "axios";

export const ApiAxios = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/",
  baseURL: "http://localhost:8080/api/v1/",
});
