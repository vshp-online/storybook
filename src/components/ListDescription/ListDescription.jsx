import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";
import { ListDescriptionItem } from "./ListDescriptionItem.jsx";

export const ListDescription = ({ children, className = "", ...props }) => {
  const renderClassNames = cnTransform("list-description", `${className}`);

  return (
    <div className={renderClassNames} {...props}>
      {children}
    </div>
  );
};

ListDescription.Item = ListDescriptionItem;

ListDescription.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
