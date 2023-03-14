import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";

export const Item = ({ children, className, title, description, ...props }) => {
  const renderClassNames = cnTransform("steps__item", `${className}`);

  return (
    <div className={renderClassNames} {...props}>
      <div className="steps__item-label">
        <div className="steps__item-label-title">{title}</div>
        <div className="steps__item-label-text">
          {description}
          {children}
        </div>
      </div>
      <div className="steps__item-decor"></div>
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

Item.defaultProps = {
  children: undefined,
  className: "",
  title: "",
  description: "",
};
