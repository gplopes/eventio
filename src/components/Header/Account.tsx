import React, { PureComponent } from "react";

import { Button, AccountContainer } from "./Account.styles";

import Dropdown from "./components/Dropdown";
import Avatar from "../Avatar/Avatar";
import getUserName from "../../utils/getUserName";

/////////////////////////////////////////////////////////////// Type

type Props = {
  firstName: string;
  lastName: string;
  setLogout(): void;
};

type State = {
  isDropdownVisible: boolean;
};

/////////////////////////////////////////////////////////////// UI

class Account extends PureComponent<Props, State> {
  state = {
    isDropdownVisible: false
  };
  open = () => {
    this.setState({ isDropdownVisible: true });
  };
  close = () => {
    this.setState({ isDropdownVisible: false });
  };
  render() {
    const { firstName, lastName, setLogout } = this.props;
    const { isDropdownVisible } = this.state;

    const { fullName, initials } = getUserName({ firstName, lastName });
    return (
      <AccountContainer onClick={this.open} onMouseLeave={this.close}>
        <Avatar initials={initials} />
        <Button>
          <p>{fullName}</p>
        </Button>
        {isDropdownVisible && <Dropdown setLogout={setLogout} />}
      </AccountContainer>
    );
  }
}

export default Account;
