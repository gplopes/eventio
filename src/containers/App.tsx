import React from "react";
import { Provider } from "react-redux";

// Store
import stores from "../store";
import Header from "../components/Header/Header";

/////////////////////////////////// Type

type Props = {
  Component: any;
  user: object;
  pageProps: object;
};

/////////////////////////////////// UI

function App(props: Props) {
  const { Component, pageProps } = props;
  return (
    <Provider store={stores}>
      <Header {...Component.headerProps} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
