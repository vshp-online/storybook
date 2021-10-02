import React from "react";
import PropTypes from "prop-types";

import { cnTransform } from "../../utils/cn-transform";

export const CardRow = ({ children, className }) => {
  const renderClassNames = cnTransform("card__row", `${className}`);

  return <div className={renderClassNames}>{children}</div>;
};

CardRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardRow.defaultProps = {
  children: undefined,
  className: "",
};
