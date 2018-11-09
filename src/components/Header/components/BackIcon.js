import React from "react";
import Link from "next/link";
import Icon from "../../Icon";

export function BackIcon({ name, href = "/" }) {
  return (
    <Link href={href}>
      <a className="flex-row">
        <Icon type={Icon.Type.back} />
        <span>{name}</span>
      </a>
    </Link>
  );
}

export default BackIcon;
