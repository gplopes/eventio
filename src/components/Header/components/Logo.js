import React from "react";
import Link from "next/link";
import classNames from "classnames";

function Logo({ light = false }) {
  //const imgSrc = light ? "logo.svg" : "logo-dark.svg";
  return (
    <Link href="/">
      <a>
        <div className={classNames("Logo", { light })} alt="Envetio" />
      </a>
    </Link>
  );
}

export default Logo;
