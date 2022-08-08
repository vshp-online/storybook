import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";

export const ListOrderedItem = ({ children, className, ...props }) => {
  const renderClassNames = cnTransform("list-ordered__item", `${className}`);

  return (
    <div className={renderClassNames} {...props}>
      {children}
    </div>
  );
};

ListOrderedItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ListOrderedItem.defaultProps = {
  children: undefined,
  className: "",
};
