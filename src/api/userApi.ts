import path from "path";
import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

const { API, APIKey } = getConfig().publicRuntimeConfig;

//////////////////////////////////////////////////// LOGIN

export const login = (email: string, password: string) => {
  const url = path.join(API, "/auth/native");
  const options = {
    method: "POST",
    headers: { APIKey, "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  };

  return fetch(url, options)
    .then(r =>
      r.json().then(data => ({ token: r.headers.get("refresh-token"), ...data }))
    )
    .then(data => data);
};

//////////////////////////////////////////////////////// Refresh Token

export const refreshToken = (refreshToken: string) => {
  const url = path.join(API, "/auth/native");
  const options = {
    method: "POST",
    headers: { APIKey, "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken })
  };

  return fetch(url, options);
};

////////////////////////////////////////////////////////// Register

export const register = (user: object) => {
  const url = path.join(API, "users");

  const options = {
    method: "POST",
    headers: { APIKey, "Content-Type": "application/json" },
    body: JSON.stringify({ user })
  };
  return fetch(url, options);
};

export default { login, refreshToken, register };
