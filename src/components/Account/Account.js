import React, { PureComponent } from "react";
import classNames from "classnames";
import Link from "next/link";

import "./Account.style.scss";

import Avatar from "../Avatar";

function Dropdown({ isOpen = false }) {
  return (
    <div className={classNames("Account-Dropdown", { hidden: !isOpen })}>
      <ul>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

class Account extends PureComponent {
  state = {
    isDropdownVisible: false
  };
  toggleDropdown = () => {
    this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
  };
  render() {
    const { firstName, lastName } = this.props;
    const initials = firstName[0] + lastName[0];
    const fullName = `${firstName} ${lastName}`;
    return (
      <div
        className="Account"
        onMouseEnter={this.toggleDropdown}
        onMouseLeave={this.toggleDropdown}
      >
        <Avatar initials={initials} />
        <div className="Account-button">
          <p>{fullName}</p>
        </div>
        <Dropdown isOpen={this.state.isDropdownVisible} />
      </div>
    );
  }
}

Account.defaultProps = {
  firstName: "Tom",
  lastName: "Walter"
};

export default Account;
