import React from "react";
import PropTypes from "prop-types";
import { cnTransform } from "../../utils/cn-transform";
import "../../styles/index.scss";

export const Button = ({
  children,
  className,
  view,
  maxWidth,
  corners,
  size,
  icon,
  href,
  ...props
}) => {
  const modeWidth = maxWidth && "btn_max-width-sm";
  const modeSize = size && `btn_${size}`;
  const modeIcon = icon && "btn_small-icon";
  const modeCorners = corners && "btn_square";

  const renderClassNames = cnTransform(
    "btn",
    `btn_${view}`,
    modeCorners,
    modeWidth,
    modeSize,
    modeIcon,
    `${className}`
  );

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
  view: PropTypes.string,
  corners: PropTypes.string,
  maxWidth: PropTypes.bool,
  icon: PropTypes.bool,
  size: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  view: "primary",
  corners: "",
  maxWidth: false,
  size: "",
  icon: false,
  onClick: undefined,
  className: "",
  href: undefined,
};
