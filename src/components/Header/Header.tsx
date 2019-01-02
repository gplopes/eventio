import React, { ReactNode } from "react";
import Router from "next/router";
import { connect } from "react-redux";
import { logout } from "../../store/userStore";

import urls from '../../routes/urls';

import { HeaderStyled } from "./Header.style";
import Account from "./Account";
import Logo from "./Logo";

////////////////////////////////////////// Types

type Props = {
  lightLogo: boolean;
  hideAccount: boolean;
  rightComponent: ReactNode;
  centerItem: ReactNode;
  user?: {
    authToken: string;
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

function Header(props: Props) {
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
    Router.replace(urls.LOGIN);
  };

  /// Right Item
  const renderRightItem = (): ReactNode | null => {
    if (user && user.authToken && !hideAccount) {
      return <Account {...user} setLogout={setLogout} />;
    }

    return rightComponent;
  };

  return (
    <HeaderStyled>
      <div className="container">
        <Logo light={lightLogo} />
        {centerItem}
        {renderRightItem()}
      </div>
    </HeaderStyled>
  );
}

Header.defaultProps = defaultProps;

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
)(Header);
