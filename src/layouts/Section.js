import React from "react";
import PropTypes from "prop-types";


function Section({ children, style, className, container }) {
  return (
    <section style={style} className={className}>
      {container ? <div className="container">{children}</div> : children}
    </section>
  );
}

Section.defaultProps ={
  container: true,
  style: null,
  className: null
};

Section.propTypes = {
  container: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object)
};

export default Section;