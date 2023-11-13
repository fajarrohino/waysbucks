import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.ORDER_API_URL,
});

export default instance;
