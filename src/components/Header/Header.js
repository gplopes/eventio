import React from "react";

import "./Header.style.scss";

import { withConsumer } from "../../store";
import Account from "../Account";
import Logo from "./components/Logo";
import { NonAuth } from './components/Messages';

function Header(props) {
  const { lightLogo, centerItem, rightItem, auth, user } = props;

  const renderRightItem = () => {
    return auth ? <Account {...user} /> : <NonAuth />;
  };
  return (
    <header className="Header">
      <div className="container">
        <Logo light={lightLogo} />
        {centerItem}
        {renderRightItem()}
      </div>
    </header>
  );
}

Header.defaultProps = {
  auth: false,
  lightLogo: false,
  rightItem: null,
  centerItem: null
};

export default withConsumer(Header);
