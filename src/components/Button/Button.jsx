import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";

export const Button = ({ children, className, view, maxWidth, corners, size, icon, href, spaceTop, ...props }) => {
  const modeWidth = maxWidth && "btn_max-width-sm";
  const modeSize = size && `btn_${size}`;
  const modeIcon = icon && "btn_small-icon";
  const modeCorners = corners && "btn_square";
  const modeSpaceTop = spaceTop && "btn_space_top";

  const renderClassNames = cnTransform("btn", `btn_${view}`, modeCorners, modeWidth, modeSize, modeIcon, modeSpaceTop, `${className}`);

  const renderLink = (
    <a href={href} className={renderClassNames} {...props}>
      {children}
    </a>
  );

  const renderButton = (
    <button type="button" className={renderClassNames} {...props}>
      {children}
    </button>
  );
  return href ? renderLink : renderButton;
};

Button.propTypes = {
  children: PropTypes.node,
  view: PropTypes.string,
  corners: PropTypes.string,
  maxWidth: PropTypes.bool,
  icon: PropTypes.bool,
  size: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  spaceTop: PropTypes.bool,
};

Button.defaultProps = {
  children: undefined,
  view: "primary",
  corners: "",
  maxWidth: false,
  size: "",
  icon: false,
  onClick: undefined,
  className: "",
  href: undefined,
  spaceTop: false,
};
