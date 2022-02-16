import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";

export const LinkDecor = ({ children, className, link }) => {
  const renderClassNames = cnTransform("link_decor", `${className}`);
  return (
    <a className={renderClassNames} href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

LinkDecor.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  className: PropTypes.string,
};

LinkDecor.defaultProps = {
  children: undefined,
  link: "#",
  className: "",
};
