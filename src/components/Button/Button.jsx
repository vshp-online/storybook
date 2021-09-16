import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

export const Button = ({ type, maxWidth, label, ...props }) => {
  const mode = maxWidth && 'btn_max_sm';
  return (
    <button
      type="button"
      className={["btn", `btn_${type}`, mode].join(" ")}
      {...props}
    ></button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  maxWidth: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "primary",
  maxWidth: false,
  onClick: undefined,
};
