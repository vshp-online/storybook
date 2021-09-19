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
  icon,
  href,
  ...props
}) => {
  const modeWidth = maxWidth && "btn_max-width-sm";
  const modeIcon = icon && "btn_small btn_icon-only";
  const modeCorners = corners && "btn_square";

  const renderClassNames = cnTransform(
    "btn",
    `btn_${view}`,
    modeCorners,
    modeWidth,
    modeIcon,
    `${className}`
  );

  const renderIcon = icon && <span className="btn__icon">{icon}</span>;

  const renderLink = (
    <a href={href} className={renderClassNames} {...props}>
      {renderIcon}
      {children}
    </a>
  );

  const renderButton = (
    <button type="button" className={renderClassNames} {...props}>
      {renderIcon}
      {children}
    </button>
  );
  return href ? renderLink : renderButton;
};

Button.propTypes = {
  view: PropTypes.string,
  corners: PropTypes.string,
  maxWidth: PropTypes.bool,
  icon: PropTypes.node,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  view: "primary",
  corners: "",
  maxWidth: false,
  icon: undefined,
  onClick: undefined,
  className: "",
  href: undefined,
};
