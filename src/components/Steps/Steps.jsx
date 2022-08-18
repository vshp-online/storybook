import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";
import { Item } from "./Item.jsx";

const StepsComponent = ({ children, className, ...props }) => {
  const renderClassNames = cnTransform("steps", `${className}`);

  return (
    <div className={renderClassNames} {...props}>
      {children}
    </div>
  );
};

export const Steps = Object.assign(StepsComponent, { Item });

Steps.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Steps.defaultProps = {
  children: undefined,
  className: "",
};
