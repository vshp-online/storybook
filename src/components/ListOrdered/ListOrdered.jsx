import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";
import { ListOrderedItem } from "./ListOrderedItem.jsx";

export class ListOrdered extends React.Component {
  static Item = ListOrderedItem;

  render() {
    const { children, className, isTwoColumns, isThreeColumns, ...props } = this.props;
    const modeColumns = isTwoColumns && "list-ordered_cols";
    const modeColumnsThree = isThreeColumns && "list-ordered_multi_cols";
    const renderClassNames = cnTransform("list-ordered", modeColumns, modeColumnsThree, `${className}`);

    return (
      <div className={renderClassNames} {...props}>
        {children}
      </div>
    );
  }
}

ListOrdered.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isTwoColumns: PropTypes.bool,
  isThreeColumns: PropTypes.bool,
};

ListOrdered.defaultProps = {
  children: undefined,
  className: "",
  isTwoColumns: false,
  isThreeColumns: false,

};
