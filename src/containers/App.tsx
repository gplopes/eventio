import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

// Store
import stores from "../store";
import { setUser } from "../store/userStore";

// Theme
import color from "../theme/colors";

import Header from "../components/Header/Header";

/////////////////////////////////// Type

type Props = {
  Component: any;
  user: object;
  pageProps: object;
};

/////////////////////////////////// setUser

const registerUser = (user: object) => stores.dispatch(setUser(user));

/////////////////////////////////// UI

function App(props: Props) {
  const { Component, pageProps } = props;
  //props.user && registerUser(props.user);
  return (
    <ThemeProvider theme={{ color }}>
      <Provider store={stores}>
        <Header {...Component.headerProps} />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
