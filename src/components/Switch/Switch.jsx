import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";

export const Switch = ({
  children,
  className,
  defaultChecked,
  onChange,
  ...props
}) => {
  const [switchState, setSwitchState] = useState(defaultChecked);
  const [animationState, setAnimationState] = useState("false");

  const modeChecked = switchState && "switch_checked";

  const renderClassNames = cnTransform("switch", modeChecked, `${className}`);

  let timeAnimation;

  const toggleSwitch = () => {
    clearTimeout(timeAnimation);
    setSwitchState(!switchState);
    setAnimationState("true");
    timeAnimation = setTimeout(() => {
      setAnimationState("false");
    }, 700);
    onChange();
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={switchState}

      className={renderClassNames}
      onClick={toggleSwitch}
      switch-click-animating={animationState}
    >
      <span className="switch__handle"></span>
      {children}
    </button>
  );
};

Switch.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
};

Switch.defaultProps = {
  children: undefined,
  className: "",
  defaultChecked: false,
};
