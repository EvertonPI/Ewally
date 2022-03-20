import axios from "axios";

const api = axios.create({
  baseURL: "https://apidev.ewally.com.br/",
  // baseURL:"http://ngo-ws-0733:9090/api/v1/",
});
export default api;
