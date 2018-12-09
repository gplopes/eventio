import React, { ReactNode } from "react";
import Router from "next/router";
import { connect } from "react-redux";

import { logout } from "../../store/userStore";

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
  logout?: () => void;
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
    logout,
    hideAccount,
    rightComponent
  } = props;

  // Actions
  const setLogout = () => {
    logout && logout();
    Router.replace("/login");
  };

  /// Right Item
  const renderRightItem = (): ReactNode | null => {
    if (user && user.auth && !hideAccount) {
      return <Account {...user} setLogout={setLogout} />;
    } else if (React.isValidElement(rightComponent)) {
      return rightComponent;
    }
    console.log("hrey", rightComponent);
    return rightComponent;
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

HeaderContainer.defaultProps = defaultProps;

/////////////////////////////////// Connect

const mapDispatchToProps = { logout };

const mapStateToProps = (state: any) => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
