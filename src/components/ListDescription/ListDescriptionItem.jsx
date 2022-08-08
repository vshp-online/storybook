import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";

export const ListDescriptionItem = ({ children, className, title, description, ...props }) => {
  const renderClassNames = cnTransform("list-description__item", `${className}`);

  return (
    <div className={renderClassNames} {...props}>
      <div className="list-description__item-title">{title}</div>
      <div className="list-description__item-text" dangerouslySetInnerHTML={{ __html: description }}>
        {children}
      </div>
    </div>
  );
};

ListDescriptionItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

ListDescriptionItem.defaultProps = {
  children: undefined,
  className: "",
  title: "",
  description: "",
};
