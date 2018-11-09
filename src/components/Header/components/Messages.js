import React from "react";
import Link from "next/link";

export function NonAuth() {
  return (
    <p className="Header-nonauth">
      Don’t have account?{" "}
      <Link href="/signup">
        <a>SIGN UP</a>
      </Link>
    </p>
  );
}
