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
  type?: ButtonType;
  size?: SizeType;
  disabled?: boolean;
  onClick(): void;
  loading?: boolean;
};

const defaultProps: Props = {
  type: ButtonType.primary,
  disabled: false,
  loading: false,
  size: SizeType.big,
  onClick: function() {}
};

////////////////////////////////////////////// UI

function ButtonContainer(props: Props) {
  const { children, type, size, disabled, onClick, loading } = Object.assign(
    {},
    defaultProps,
    props
  );
  return (
    <Button
      size={size}
      color={type}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <Icon type={Icon.Type.loading} /> : children}
    </Button>
  );
}

//////////////////////////////// Options

ButtonContainer.Type = ButtonType;
ButtonContainer.Size = SizeType;

export default ButtonContainer;
