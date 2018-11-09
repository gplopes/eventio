import React from "react";
import Link from "next/link";

function Logo({ light = false }) {
  const imgSrc = light ? "logo.svg" : "logo-dark.svg";
  return (
    <Link href="/">
      <a>
        <img src={`/static/${imgSrc}`} className="Logo" alt="Envetio" />
      </a>
    </Link>
  );
}

export default Logo;
