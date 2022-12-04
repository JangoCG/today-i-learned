import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:4200/api"
});

export default httpClient;
