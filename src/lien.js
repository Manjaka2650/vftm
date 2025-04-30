import axios from "axios";

// const link = "http://192.168.1.13:5000";
// const link = "http://192.168.8.160:5000";
// const link = "http://192.168.1.114:5000"
// const link = "http://192.168.8.107:5000";
// const link = "http://192.168.1.143:5000";
// const link = "http://192.168.1.144:8081";
// const link = "http://192.168.43.131:5000";
// const link = "http://localhost:5000";
const link = "https://backend-vftm.onrender.com";
//
export const lien = link;
const api = axios.create({
  baseURL: link,
  timeout: 1000000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);
export default api;
