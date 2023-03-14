import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";

export const Subtitle = ({ children, className }) => {
  const renderClassNames = cnTransform("page__block-subtitle", `${className}`);

  return <h3 className={renderClassNames}>{children}</h3>;
};

Subtitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Subtitle.defaultProps = {
  children: undefined,
  className: "",
};
