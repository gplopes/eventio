import path from "path";
import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

import { localUser, cookie } from "./index";
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
      r.json().then((data: any) => {
        if (data.error) throw Error(data.error);
        return {
          refreshToken: r.headers.get("Refresh-Token"),
          authToken: r.headers.get("Authorization"),
          ...data
        };
      })
    )
    .then((data: any) => {
      cookie.set(data.authToken);
      localUser.set(data);
      return data;
    })
    .then(data => data);
};

//////////////////////////////////////////////////////// Refresh Token

export const refreshToken = () => {
  const user = localUser.get();
  if (user === undefined) return false;

  const url = path.join(API, "/auth/native");
  const options = {
    method: "POST",
    headers: { APIKey, "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken: user.refreshToken })
  };

  return fetch(url, options)
    .then(r =>
      r.json().then(data => ({
        authToken: r.headers.get("Authorization"),
        ...data
      }))
    )
    .then((data: any) => {
      cookie.set(data.authToken);
      localUser.set(data);
    })
    .then(data => data);
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
