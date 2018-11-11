import React from "react";
import Link from "next/link";
import classNames from "classnames";

function Logo({ light = false }) {
  return (
    <Link href="/">
      <a>
        <div className={classNames("Logo", { light })} alt="Envetio" />
      </a>
    </Link>
  );
}

export default Logo;
