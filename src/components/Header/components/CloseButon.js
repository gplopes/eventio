import React from "react";
import Link from "next/link";
import Icon from "../../Icon/Icon";

export function CloseIcon({ href = "/" }) {
  return (
    <Link href={href}>
      <a className="Header-button flex-row">
        <Icon type={Icon.Type.close} size="small" />
        <p>Close</p>
      </a>
    </Link>
  );
}

export default CloseIcon;
