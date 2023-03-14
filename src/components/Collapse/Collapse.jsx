import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";
import { Item } from "./Item.jsx";

const CollapseComponent = ({ children, className, ...props }) => {
  const renderClassNames = cnTransform("collapse", `${className}`);

  return (
    <div className={renderClassNames} {...props}>
      {children}
    </div>
  );
};

export const Collapse = Object.assign(CollapseComponent, { Item });

Collapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Collapse.defaultProps = {
  children: undefined,
  className: "",
};
