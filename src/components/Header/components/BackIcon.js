import React from "react";
import Link from "next/link";
import Icon from "../../Icon";

export function BackIcon({ name, href = "/" }) {
  return (
    <Link href={href}>
      <a className="Header-button flex-row">
        <Icon type={Icon.Type.back} />
        <p>{name}</p>
      </a>
    </Link>
  );
}

export default BackIcon;
