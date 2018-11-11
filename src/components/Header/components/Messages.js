import React from "react";
import Link from "next/link";

export function NonAuth() {
  return (
    <p className="Header-msg">
      Don’t have account?{" "}
      <Link href="/signup">
        <a>SIGN UP</a>
      </Link>
    </p>
  );
}

export function HaveAccount() {
  return (
    <p className="Header-msg">
      Already have an account?{" "}
      <Link href="/login">
        <a>SIGN IN</a>
      </Link>
    </p>
  );
}
