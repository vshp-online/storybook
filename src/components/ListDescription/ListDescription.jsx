import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";
import { ListDescriptionItem } from "./ListDescriptionItem.jsx";

export class ListDescription extends React.Component {
  static Item = ListDescriptionItem;

  render() {
    const { children, className, ...props } = this.props;
    const renderClassNames = cnTransform("list-description", `${className}`);

    return (
      <div className={renderClassNames} {...props}>
        {children}
      </div>
    );
  }
}

ListDescription.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ListDescription.defaultProps = {
  children: undefined,
  className: "",
};
