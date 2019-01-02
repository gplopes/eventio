// @ts-ignore
import nextCookies from "next-cookies";
import Router from "next/router";

import urls from "../../routes/urls";

///////////////////////////////////// Types

const TOKEN = "__EvtioToken__";
const LOCAL = "__Evtio__";

type CtxType = {
  res: string;
  pathname: string;
};

type LocalUser = {
  authToken: string;
  refreshToken: string;
  email: string;
  firstName: string;
  lastName: string;
  id: string;
}

////////////////////////////////////// GO LOGIN

const isClient = typeof document !== "undefined";

function redirectTo(destination: urls, { res, status }: any = {}) {
  if (res && res.writeHead) {
    res.writeHead(status || 302, { Location: destination });
    res.end();
  } else {
    if (destination[0] === "/" && destination[1] !== "/") {
      isClient && Router.push(destination);
    } else {
      // @ts-ignore
      window.location = destination;
    }
  }
}

///////////////////////////////////////////////// Local User API

export const localUser = {
  set(user: any) {
    try {
      localStorage.setItem(LOCAL, JSON.stringify(user));
    } catch (e) {}
  },
  get(): LocalUser | undefined {
    try {
      const user = localStorage.getItem(LOCAL);
      return user ? JSON.parse(user) : null;
    } catch (e) {
      return undefined;
    }
  },
  clean() {
    try {
      localStorage.clear();
    } catch (e) {}
  }
};

////////////////////////////////////////////////////// Cookies

export const cookie = {
  set(refreshToken: string, days = 2) {
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = `${TOKEN}=${refreshToken};path=/;expires=${d.toUTCString()}`;
  },
  get() {
    const user = localUser.get();
    return user && user.refreshToken;
  },
  reset() {
    document.cookie = `${TOKEN}=; expires=Thu, 01-Jan-70 00:00:01 GMT;`;
  }
};

//////////////////////////////////////////////// Services

export default class AuthService {
  ctx: CtxType;
  cookies: {
    [TOKEN]: string;
  };

  constructor(ctx: CtxType) {
    this.ctx = ctx;
    this.cookies = nextCookies(ctx);
  }

  private goTo = (url: urls) => {
    redirectTo(url, { res: this.ctx.res, status: 301 });
  };

  // Skip this pages that don't need credentials
  private isPublicPage(pathname: string): boolean {
    return (
      pathname === urls.ROOT ||
      pathname === urls.LOGIN ||
      pathname === urls.SIGNIN
      //pathname === urls.ERROR
    );
  }

  check = () => {
    if (typeof this.cookies[TOKEN] == "undefined") {
      if (this.isPublicPage(this.ctx.pathname)) return true;
      //if we are on any other page, redirect to the login page
      this.goTo(urls.LOGIN);
    } else {
      // with Valid Token
      if (this.isPublicPage(this.ctx.pathname)) this.goTo(urls.HOME);
      return false;
    }
  };
}
