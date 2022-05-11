import axios from "axios";

export default function createBackendClient() {
  return axios.create({
    baseURL: `${"http://localhost:5001"}/api/`,
    // baseURL: `${process.env.API_URL || "http://localhost:5001"}/api/`,
  });
}
