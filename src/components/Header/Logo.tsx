import React from "react";
import Link from "next/link";
import ReactSVG from 'react-svg';

///////////////////////////////////////// Types

type Props = {
  light: boolean;
};

//////////////////////////////////////////////////////// UI

function Logo(props: Props = { light: true }) {
  const src = props.light ? "/static/logo.svg" : "/static/logo-dark.svg";
  return (
    <Link href="/" prefetch>
      <a>
       <ReactSVG svgClassName="Logo" src={src} />
      </a>
    </Link>
  );
}

export default Logo;
