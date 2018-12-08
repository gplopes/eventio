import React, { ReactNode } from "react";
import Router from "next/router";
import { connect } from 'react-redux';

import { Header } from "./Header.style";

import Account from "./Account";
import Logo from "./Logo";

////////////////////////////////////////// Types

type Props = {
  lightLogo: boolean;
  hideAccount: boolean;
  rightComponent: ReactNode;
  centerItem: ReactNode;
  user?: {
    auth: boolean;
    firstName: string;
    lastName: string;
  };
  actions?: {
    setLogout(): void;
  };
};

const defaultProps: Props = {
  lightLogo: false,
  rightComponent: null,
  hideAccount: false,
  centerItem: null
};

///////////////////////////////////////////////// UI

function HeaderContainer(props: Props) {
  const {
    lightLogo,
    centerItem,
    user,
    actions,
    hideAccount,
    rightComponent
  } = props;

  console.log("HHEADER", user);

  // Actions
  const setLogout = () => {
    actions && actions.setLogout();
    Router.replace("/login");
  };

  /// Right Item
  const renderRightItem = (): ReactNode | null => {
    if (user && user.auth && !hideAccount) {
      return <Account {...user} setLogout={setLogout} />;
    } else if (React.isValidElement(rightComponent)) {
      return rightComponent;
    }
    return null;
  };


  return (
    <Header>
      <div className="container">
        <Logo light={lightLogo} />
        {centerItem}
        {renderRightItem()}
      </div>
    </Header>
  );
}

///////////////////////

HeaderContainer.defaultProps = defaultProps;

/////////////////////////////////// Connect


const mapStateToProps = (state: any) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(HeaderContainer);
