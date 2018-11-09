import axios from "axios";

export const apiKey = "XJteT/GSsbL4H8mr/1BGrF8a+2p63NFq5gqpUpKLAex8";

export const authUrl = "https://testproject-api-v2.strv.com/auth/native";
export const eventUrl = "https://testproject-api-v2.strv.com/events";

export const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    APIKey: apiKey
  }
});

export default api;