import React from "react";
import PropTypes from "prop-types";
import { cnTransform } from "../../utils/cn-transform";
import "../../styles/index.scss";

const renderTitle = (type, children, renderClassNames) => {
  let title;
  switch (type) {
    case "h1":
      title = <h1 className={renderClassNames}>{children}</h1>;
      break;
    case "h2":
      title = <h2 className={renderClassNames}>{children}</h2>;
      break;
    case "block":
      title = <div className={renderClassNames}>{children}</div>;
      break;
    default:
      break;
  }
  return title;
};

export const Title = ({ children, className, type }) => {
  const renderClassNames = cnTransform("title", `${className}`);
  return renderTitle(type, children, renderClassNames);
};

Title.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

Title.defaultProps = {
  type: "h1",
  className: "",
};
