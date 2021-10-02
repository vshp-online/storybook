import React from "react";
import PropTypes from "prop-types";

import { cnTransform } from "../../utils/cn-transform";

export const CardSubtitle = ({ children, className }) => {
  const renderClassNames = cnTransform("card__subtitle", `${className}`);

  return <div className={renderClassNames}>{children}</div>;
};

CardSubtitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardSubtitle.defaultProps = {
  children: undefined,
  className: "",
};
