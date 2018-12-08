import React from "react";
import Link from "next/link";
import styled from "styled-components";


///////////////////////////////////// Styled

const MsgContainer = styled.p`
  font-size: 14px;
  /* color: $colors-text-light; */
  a {
    /* color: $colors-grey-regent; */
    /* font-weight: $weight-semibold; */
    &:hover {
      /* color: $colors-blue-spruce; */
    }
  }
`;


////////////////////////////////////// UI: Dont have account

export function NonAuth() {
  return (
    <MsgContainer>
      Don’t have account?{" "}
      <Link href="/signup">
        <a>SIGN UP</a>
      </Link>
    </MsgContainer>
  );
}

////////////////////////////////////// UI: Already have account

export function HaveAccount() {
  return (
    <MsgContainer>
      Already have an account?{" "}
      <Link href="/login">
        <a>SIGN IN</a>
      </Link>
    </MsgContainer>
  );
}
