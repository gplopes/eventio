import axios from "axios";
import qs from "qs";
import { authUrl, apiKey } from "./apiConfig";

const auth = (email, password) => {
  var request = new XMLHttpRequest();
  request.open("POST", authUrl);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("APIKey", apiKey);

  request.onreadystatechange = function() {
    if (this.readyState === 4) {
      console.log("Status:", this.status);
      console.log("Headers:", this.getAllResponseHeaders());
      console.log("Body:", this.responseText);
    }
  };

  request.send(JSON.stringify({ email, password }));
};

// axios({ ...axiosConfig, data: JSON.stringify({ email, password }) });

export default auth;
