import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

// Store
import stores from "../store";
import { setUser } from '../store/userStore';

// Theme
import "../theme/colors";

import { Provider as OldProvider } from "../store";
import Header from "../components/Header/Header";

type Props = {
  Component: any;
  user: object;
  pageProps: object;
};

/////////////////////////////////// setUser

stores.subscribe(() => {
  console.log(stores.getState());
});

const registerUser = (user: object) => stores.dispatch(setUser(user));

/////////////////////////////////// UI

function App(props: Props) {
  const { Component, pageProps } = props;
  const headerProps = Component || Component.headerProps || {};
  props.user && registerUser(props.user);
  return (
    <ThemeProvider theme={{ mode: "light" }}>
      <Provider store={stores}>
        <OldProvider>
          <Header {...headerProps} />
          <Component {...pageProps} />
        </OldProvider>
      </Provider>
    </ThemeProvider>
  );
}


export default App;
