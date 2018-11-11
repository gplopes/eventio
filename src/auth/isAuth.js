import cookies from "next-cookies";
import redirectTo from "../lib/redirectTo";
import userApi from "../api/userApi";

const goLogin = ctx => redirectTo("/login", { res: ctx.res, status: 301 });
const goDashboard = ctx =>
  redirectTo("/dashboard", { res: ctx.res, status: 301 });

const handleUndefinedToken = ctx => {
  // SKIP Pages which don't need credentials
  // all the other pages are redirected to login
  if (
    ctx.pathname !== "/login" &&
    ctx.pathname !== "/signup" &&
    ctx.pathname !== "/_error"
  ) {
    goLogin(ctx);
  }
};

const handleRootEntry = (ctx, isTokenStillValid) => {
  if (isTokenStillValid) goDashboard(ctx);
  else goLogin(ctx);
};

const handleLoginEntry = (ctx, isTokenStillValid) => {
  if (isTokenStillValid) goDashboard(ctx);
  // otherwise stay where you are
};

async function isAuth(ctx) {
  const c = cookies(ctx);

  // NO TOKEN: If Token doesn't exists
  if (typeof c.refreshToken == "undefined") {
    handleUndefinedToken(ctx);
    return false;
  } else {
    // WITH TOKEN
    try {
      const user = await userApi.refreshToken(c.refreshToken);
      if (
        ctx.pathname == "/" ||
        ctx.pathname == "/login" ||
        ctx.pathname == "/signup"
      )
        goDashboard(ctx);

      // Return Data to the app
      const token = user.headers["authorization"];
      return { ...user.data, token };
    } catch (err) {
      if (ctx.pathname !== "/login" && ctx.pathname !== "/signup") {
        goLogin(ctx);
      }
      return false;
    }
  }
}

export default isAuth;
