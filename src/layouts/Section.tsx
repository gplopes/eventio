import React, { ReactNode } from "react";
import classNames from 'classnames';

type Props = {
  container?: boolean;
  centeredContent?: boolean;
  centeredContainer?: boolean;
  children?: ReactNode;
  className?: string;
  style?: object;
};

const defaultProps: Props = {
  container: true,
  centeredContent: false,
};

function Section(props: Props) {
  const { children, style, className, container, centeredContent } = Object.assign({}, defaultProps, props);
  const containerClasses = classNames("container", {"centered-content": centeredContent })
  return (
    <section style={style} className={className}>
      {container ? <div className={containerClasses}>{children}</div> : children}
    </section>
  );
}


export default Section;
