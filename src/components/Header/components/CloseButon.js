import React from "react";
import Link from "next/link";
import Icon from "../../Icon/Icon";

export function BackIcon({ href = "/" }) {
  return (
    <Link href={href}>
      <a className="flex-row">
        <Icon type={Icon.Type.close} />
        <span>Back</span>
      </a>
    </Link>
  );
}

export default BackIcon;
