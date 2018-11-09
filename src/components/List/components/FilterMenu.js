import React, { Component } from "react";
import classNames from "classnames";

import Icon from "../../Icon";
import { constants, withContext } from "../List.settings";

const renderItem = ({ name, type, activeFilter, toggleFilter }) => {
  const active = activeFilter == type;
  return (
    <li className={classNames({ active })}>
      <div onClick={() => toggleFilter(type)}>{name}</div>
    </li>
  );
};

class FilterMenu extends Component {
  static getDerivedStateFromProps(props) {
    return {
      selected: props.filter
    };
  }
  state = {
    selected: "",
    isOpen: false,
    isDesktop: true
  };
  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }
  onResize = () => {
    const isDesktop = window.innerWidth > 750;
    if (isDesktop === this.state.isDesktop) return false;
    console.log("RESIZE", isDesktop, window.innerWidth);
    this.setState({ isDesktop });
  }

  toggleDropdown = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  mobileVersion = () => {
    return (
      <div
        className="FilterMenu-dropdown flex-row"
        onClick={this.toggleDropdown}
      >
        <span>SHOW:</span>
        <p className="FilterMenu-selected text-dark">{this.state.selected}</p>
        <Icon type={Icon.Type.arrowBack} size="small" />
        {this.menu()}
      </div>
    );
  };
  menu = () => {
    const { filter, toggleFilter } = this.props;
    const { isOpen, isDesktop } = this.state;
    const menuClass = classNames({
      "List-filter": isDesktop,
      "FilterMenu-mobile": !isDesktop,
      opened: isOpen
    });
    return (
      <ul className={menuClass}>
        {renderItem({
          name: "All events",
          type: constants.ALL_EVENTS,
          activeFilter: filter,
          toggleFilter
        })}
        {renderItem({
          name: "Future events",
          type: constants.FUTURE_EVENTS,
          activeFilter: filter,
          toggleFilter
        })}
        {renderItem({
          name: "Past events",
          type: constants.PAST_EVENTS,
          activeFilter: filter,
          toggleFilter
        })}
      </ul>
    );
  };
  render() {
    const { isDesktop } = this.state;
    return isDesktop ? this.menu() : this.mobileVersion();
  }
}

export default withContext(FilterMenu);
