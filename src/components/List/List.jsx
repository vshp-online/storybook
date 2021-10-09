import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";

export const List = ({ children, className, headerText, isLarge, ...props }) => {
  const modeSize = isLarge && "list_lg";
  const renderClassNames = cnTransform("list", modeSize, `${className}`);

  return (
    <section className={renderClassNames}>
      {headerText && <div className="list__header">{headerText}</div>}
      <ul className="list__items">{children}</ul>
    </section>
  );
};

List.propTypes = {
  children: PropTypes.node,
  headerText: PropTypes.string,
  className: PropTypes.string,
  isLarge: PropTypes.bool,
};

List.defaultProps = {
  children: undefined,
  headerText: "",
  className: "",
  isLarge: false,
};
