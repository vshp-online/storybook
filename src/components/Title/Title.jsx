import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";

const renderTitle = (type, children, renderClassNames, props) => {
  let title;
  switch (type) {
    case "h1":
      title = <h1 className={renderClassNames} {...props}>{children}</h1>;
      break;
    case "h2":
      title = <h2 className={renderClassNames} {...props}>{children}</h2>;
      break;
    case "block":
      title = <div className={renderClassNames} {...props}>{children}</div>;
      break;
    default:
      break;
  }
  return title;
};

export const Title = ({ children, className, type, decor, ...props }) => {
  const modeDecor = decor && "title_decor";
  const renderClassNames = cnTransform("title", modeDecor, `${className}`);
  return renderTitle(type, children, renderClassNames, props);
};

Title.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  decor: PropTypes.bool,
  className: PropTypes.string,
};

Title.defaultProps = {
  children: undefined,
  type: "h1",
  decor: true,
  className: "",
};
