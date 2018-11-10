import React  from "react";
import PropTypes from "prop-types";
import Router from "next/router";

import "./Header.style.scss";

import { withConsumer } from "../../store";
import Account from "../Account";
import Logo from "./components/Logo";
//import { NonAuth } from "./components/Messages";

function Header(props) {
  const { lightLogo, centerItem, auth, user, actions, hideAccount, rightComponent } = props;

  const setLogout = () => {
    actions.setLogout();
    Router.replace("/login");
  };
  const renderRightItem = () => {
    if (auth && !hideAccount) {
      return <Account {...user} setLogout={setLogout} />;
    } else if (React.isValidElement(rightComponent)) {
      return rightComponent;
    }
    return null
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
  rightComponent: null,
  hideAccount: false,
  centerItem: null
};

Header.propTypes = {
  auth: PropTypes.bool,
  lightLogo: PropTypes.bool,
  hideAccount: PropTypes.bool,
  rightComponent: PropTypes.element,
  centerItem: PropTypes.node
};

export default withConsumer(Header);
