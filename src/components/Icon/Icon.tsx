import React from "react";
import classNames from "classnames";

import "./Icon.styles.scss";


//////////////////////////////// Options

enum IconType {
  eye = "icon-eye",
  user = "icon-user",
  loading = "icon-loading",
  grid = "icon-grid",
  list = "icon-list",
  back = "icon-back",
  plus = "icon-plus",
  delete = "icon-delete",
  close = "icon-close",
  arrowBack = "icon-arrow",
}

enum SizeType {
  small = 'small',
  normal = 'normal',
  big = 'big'
};

//////////////////////////////////// Types

type Props = {
  onClick?: () => void,
  size?: SizeType,
  className?: string,
  type: IconType
};


const defaultProps: Props = {
  size: SizeType.small,
  type: IconType.close
};

///////////////////////////////////////////////// IU

function Icon(props: Props) {
  const { type, onClick, className, size } = Object.assign({}, defaultProps, props);
  const buttonType = SizeType.small;
  const iconClasses = classNames("Icon", type, className, {
    [buttonType]: size !== 'normal',
    clickable: onClick !== null
  });
  return <div onClick={onClick} className={iconClasses} />;
}

////////////////////////////////////////////////// Options

Icon.Type = IconType;
Icon.Size = SizeType;


export default Icon;
