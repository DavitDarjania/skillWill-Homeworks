import axios from "axios";

export const $productsAxios = axios.create({
  baseURL: "https://dummyjson.com/",
});
