import React from "react";

import Icon from "../Icon/Icon";
import { Button } from "./styles";

////////////////////////////////// Types

export enum ButtonType {
  primary = "primary",
  update = "update",
  alert = "alert",
  disabled = "disabled",
  dark = "dark"
}

export enum SizeType {
  small = "small",
  default = "default",
  big = "big"
}

/////////////////////////////// Props

type Props = {
  children?: string;
  type?: string;
  color?: ButtonType;
  size?: SizeType;
  disabled?: boolean;
  onClick(): void;
  loading?: boolean;
};

const defaultProps: Props = {
    color: ButtonType.primary,
    disabled: false,
    loading: false,
    size: SizeType.big,
    onClick: function() {}
};

////////////////////////////////////////////// UI

function ButtonContainer(props: Props) {
  const { children, color, type, size, disabled, onClick, loading } = props;
  return (
    <Button
      size={size}
      color={color}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <Icon type={Icon.Type.loading} /> : children}
    </Button>
  );
}

///////////////////////////////////// Options

ButtonContainer.defaultProps = defaultProps;
ButtonContainer.Type = ButtonType;
ButtonContainer.Size = SizeType;


export default ButtonContainer;
