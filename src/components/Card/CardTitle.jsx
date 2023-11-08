import React from "react";
import PropTypes from "prop-types";

import { cnTransform } from "../../utils/cn-transform";

export const CardTitle = ({ children, className, ...props }) => {
  const renderClassNames = cnTransform("card__title", `${className}`);

  return <div className={renderClassNames} {...props}>{children}</div>;
};

CardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardTitle.defaultProps = {
  children: undefined,
  className: "",
};
