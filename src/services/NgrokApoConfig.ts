import axios from "axios";

export default function Api() {
  const api = axios.create({
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "ngrok-skip-browser-warning": "69420"
    },
  });
  const token = localStorage.getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    api.defaults.headers.common["Authorization"] = "";
  }
  return api;
}