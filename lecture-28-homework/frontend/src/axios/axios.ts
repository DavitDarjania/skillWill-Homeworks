import axios from "axios";

export const $axios = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});

export const $userAxios = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});

$userAxios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    return config;
  },
  (error) => Promise.reject(error),
);

$userAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == "401" &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      $axios
        .get("/refresh")
        .then((res) => {
          console.log(res);
          localStorage.setItem("accessToken", `Bearer ${res.data.accessToken}`);
          return $userAxios.request(originalRequest);
        })
        .catch((error) => {
          // localStorage.removeItem("accessToken");
          // return Promise.reject(error);
        });
    }
  },
);
