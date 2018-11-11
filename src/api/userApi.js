import { api, authUrl, userUrl } from "./apiConfig";

export const login = (email, password) =>
  api.post(authUrl, { email, password }).then(res => {
    const refreshToken = res.headers["refresh-token"];
    const token = res.headers["authorization"];
    document.cookie = `refreshToken=${refreshToken}`;
    const user = res.data;
    return { ...user, token };
  });

export const refreshToken = refreshToken => api.post(authUrl, { refreshToken });

export const register = user => api.post(userUrl, user);

export default { login, refreshToken, register };
