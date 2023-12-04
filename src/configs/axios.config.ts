import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
});
