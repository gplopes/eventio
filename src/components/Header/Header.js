import React from "react";
import Link from "next/link";

import "./Header.style.scss";

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <img
          src="./static/logo.svg"
          className="Header-logo"
          alt="Envetio Logo"
        />
        <p>
          Don’t have account? <Link href="/signup">SIGN UP</Link>
        </p>
      </div>
    </header>
  );
};

export default Header;
