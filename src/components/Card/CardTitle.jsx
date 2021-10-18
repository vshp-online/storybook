import React from "react";
import PropTypes from "prop-types";

import { cnTransform } from "../../utils/cn-transform";

export const CardTitle = ({ children, className }) => {
  const renderClassNames = cnTransform("card__title", `${className}`);

  return <div className={renderClassNames}>{children}</div>;
};

CardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardTitle.defaultProps = {
  children: undefined,
  className: "",
};
