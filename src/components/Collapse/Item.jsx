import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";

const icon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <polygon points="24.9,27.9 17.3,20 24.9,12.1 22.9,10 13.2,20 15.3,22.1 15.3,22.1 22.9,30 " />
  </svg>
);

export const Item = ({ children, className, header, content, ...props }) => {
  const [isToggled, setToggled] = useState(false);
  const modeOpen = isToggled && "collapse__item_open";
  const renderClassNames = cnTransform("collapse__item", modeOpen, `${className}`);

  const handleQuestionToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div className={renderClassNames} {...props}>
      <div className="collapse__header" onClick={handleQuestionToggle}>
        <div className="collapse__header-icon">{icon}</div>
        <div className="collapse__header-text">{header}</div>
      </div>
      <div className="collapse__content" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
};

Item.defaultProps = {
  children: undefined,
  className: "",
  header: "",
  content: "",
};
