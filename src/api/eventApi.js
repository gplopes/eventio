import axios from "axios";
import { apiKey } from "./apiConfig";

const getEvents = () =>
  axios({
    method: "GET",
    url: "https://testproject-api-v2.strv.com/events",
    headers: {
      "Content-Type": "application/json",
      APIKey: apiKey
    }
  });
// request(
//   {
//     method: "GET",
//     url: "https://testproject-api-v2.strv.com/events",
//     headers: {
//       "Content-Type": "application/json",
//       APIKey: apiKey
//     }
//   },
//   function(error, response, body) {
//     console.log("Status:", response.statusCode);
//     console.log("Headers:", JSON.stringify(response.headers));
//     console.log("Response:", body);
//   }
// );

export default { getEvents };
