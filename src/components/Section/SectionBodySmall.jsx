import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";

export const BodySmall = ({ children, className }) => {
  const renderClassNames = cnTransform("page__block-body_small", `${className}`);

  return <div className={renderClassNames}>{children}</div>;
};

BodySmall.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

BodySmall.defaultProps = {
  children: undefined,
  className: "",
};
