import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';


function Section({ children, style, className, container, centeredContent }) {
  const containerClasses = classNames("container", {"centered-content": centeredContent })
  return (
    <section style={style} className={className}>
      {container ? <div className={containerClasses}>{children}</div> : children}
    </section>
  );
}

Section.defaultProps ={
  container: true,
  style: null,
  className: null,
  centeredContent: false,
};

Section.propTypes = {
  container: PropTypes.bool,
  centeredContent: PropTypes.bool,
  centeredContainer: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object)
};

export default Section;