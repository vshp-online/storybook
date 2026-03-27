import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";
import { ListOrderedItem } from "./ListOrderedItem.jsx";

export const ListOrdered = ({ children, className = "", isTwoColumns = false, isThreeColumns = false, ...props }) => {
  const modeColumns = isTwoColumns && "list-ordered_cols";
  const modeColumnsThree = isThreeColumns && "list-ordered_multi_cols";
  const renderClassNames = cnTransform("list-ordered", modeColumns, modeColumnsThree, `${className}`);

  return (
    <div className={renderClassNames} {...props}>
      {children}
    </div>
  );
};

ListOrdered.Item = ListOrderedItem;

ListOrdered.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isTwoColumns: PropTypes.bool,
  isThreeColumns: PropTypes.bool,
};
