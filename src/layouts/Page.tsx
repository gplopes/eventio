import React, { ReactNode } from "react";
import Head from "next/head";
import styled, { css } from "styled-components";

import breakpoints from "../theme/breakpoints";

import "../styles/main.scss";

///////////////////////////////////// Types

type Props = {
  children?: ReactNode;
  name?: string;
  title?: string;
  className?: string;
  topGap?: boolean;
  fullScreen?: boolean;
};

const defaultProps: Props = {
  topGap: true,
  fullScreen: false,
  title: "Eventio"
};

///////////////////////////////////// Styled

const Main = styled.main<Props>`
  padding-top: 90px;
  min-height: auto;

  @media (min-width: ${breakpoints.phablet}px) {
    min-height: 100%;
    padding-top: ${props => (props.topGap ? 120 : 0)}px;

    ${props =>
      props.fullScreen &&
      css`
        display: flex;
        min-height: 100vh;
      `}
  }
`;

///////////////////////////////////// UI

const Page = (props: Props) => {
  const { children, name, title, className, topGap, fullScreen } = props;
  return (
    <Main
      className={className}
      data-page={name}
      topGap={topGap}
      fullScreen={fullScreen}
    >
      <Head>
        <title>Eventio | {title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Eventio" />
        <meta property="og:url" content="eventio.io" />
        <meta property="og:description" content="Eventio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="eventio/image" />
      </Head>
      {children}
    </Main>
  );
};

Page.defaultProps = defaultProps;

export default Page;
