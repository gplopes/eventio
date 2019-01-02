import React, { Component } from "react";
import classNames from "classnames";

import { FilterMenuStyled } from "./FilterMenu.style";

import Icon from "../../Icon/Icon";
import { withContext } from "../List.settings";
import { FilterTypes } from "../List";

import { ListMenuStyled } from './FilterMenu.style';

/////////////////////////////////////////////////////////// Props

type Props = {
  filter: FilterTypes;
  toggleFilter(type: FilterTypes): void;
};

type State = {
  selected: string;
  isOpen: boolean;
  canRender: boolean;
  isDesktop: boolean;
};

///////////////////////////////////////////// Render Item Menu

type ItemType = {
  name: string;
  type: FilterTypes;
  activeFilter: FilterTypes;
  toggleFilter(type: FilterTypes): void;
};
const renderItem = ({ name, type, activeFilter, toggleFilter }: ItemType) => {
  const active = activeFilter == type;
  return (
    <li className={classNames({ active })}>
      <div onClick={() => toggleFilter(type)}>{name}</div>
    </li>
  );
};

/////////////////////////////////////////////////// UI

class FilterMenu extends Component<Props, State> {
  static getDerivedStateFromProps(props: Props) {
    return {
      selected: props.filter
    };
  }

  state = {
    selected: "",
    isOpen: false,
    canRender: false,
    isDesktop: true
  };

  componentDidMount() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    const isDesktop = window.innerWidth > 750;
    if (isDesktop === this.state.isDesktop) return false;
    this.setState({ isDesktop, canRender: true });
  };

  dropdownToggler = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  mobileVersion = () => {
    return (
      <FilterMenuStyled className="flex-row" onClick={this.dropdownToggler}>
        <span>SHOW:</span>
        <p className="selected">{this.state.selected}</p>
        <Icon type={Icon.Type.arrowBack} size={Icon.Size.small} />
        {this.menu()}
      </FilterMenuStyled>
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
      <ListMenuStyled className={menuClass}>
        {renderItem({
          name: "All events",
          type: FilterTypes.ALL_EVENTS,
          activeFilter: filter,
          toggleFilter
        })}
        {renderItem({
          name: "Future events",
          type: FilterTypes.FUTURE_EVENTS,
          activeFilter: filter,
          toggleFilter
        })}
        {renderItem({
          name: "Past events",
          type: FilterTypes.PAST_EVENTS,
          activeFilter: filter,
          toggleFilter
        })}
      </ListMenuStyled>
    );
  };
  render() {
    const { isDesktop } = this.state;
    return isDesktop ? this.menu() : this.mobileVersion();
  }
}

export default withContext(FilterMenu);
