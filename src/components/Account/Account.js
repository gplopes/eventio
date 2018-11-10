import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";

import "./Account.style.scss";

import Avatar from "../Avatar";
import getUserName from "../../utils/getUserName";

function Dropdown({ isOpen = false, setLogout }) {
  return (
    <div className={classNames("Account-Dropdown", { hidden: !isOpen })}>
      <ul>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <a onClick={setLogout}>Logout</a>
        </li>
      </ul>
    </div>
  );
}

class Account extends PureComponent {
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
    const { fullName, initials } = getUserName({ firstName, lastName });

    return (
      <div className="Account" onClick={this.open} onMouseLeave={this.close}>
        <Avatar initials={initials} />
        <div className="Account-button">
          <p>{fullName}</p>
        </div>
        <Dropdown isOpen={this.state.isDropdownVisible} setLogout={setLogout} />
      </div>
    );
  }
}

Account.defaultProps = {
  firstName: "",
  lastName: ""
};

export default Account;
