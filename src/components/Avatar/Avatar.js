import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";
import "./Avatar.styles.scss";

function Avatar({ image, initials, size }) {
  const avatarBg = image ? { backgroundImage: `url(${image})` } : null;
  return (
    <div className={classNames("Avatar", size)} style={avatarBg}>
      {!image && initials && <p>{initials}</p>}
    </div>
  );
}

Avatar.defaultProps = {
  size: "small",
  image: null,
  initials: ""
};

Avatar.protoTypes = {
  image: PropTypes.string,
  initials: PropTypes.string,
  size: PropTypes.oneOf(["small", "big"])
};

export default Avatar;
