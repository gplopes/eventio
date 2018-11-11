import Router from "next/router";

const isClient = typeof document !== 'undefined';

export default function redirectTo(destination, { res, status } = {}) {
  if (res && res.writeHead) {
    res.writeHead(status || 302, { Location: destination });
    res.end();
  } else {
    if (destination[0] === "/" && destination[1] !== "/") {
      isClient && Router.push(destination);
    } else {
      window.location = destination;
    }
  }
}
