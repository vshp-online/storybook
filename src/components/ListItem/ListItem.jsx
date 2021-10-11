import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";
import { Link } from "react-router-dom";

export const ListItem = ({
  children,
  className,
  link,
  title,
  titleClass,
  mark,
  markClass,
  icon,
  iconClass,
  ...props
}) => {
  const modeItem = icon && "list__item_icon";
  const renderClassNames = cnTransform("list__item", modeItem, `${className}`);
  const renderIconClassNames = cnTransform("list__item-icon", `${iconClass}`);
  const renderTitleClassNames = cnTransform("list__item-title", `${titleClass}`);
  const renderMarkClassNames = cnTransform("list__item-mark", `${markClass}`);

  const renderIcon = icon && <div className={renderIconClassNames}>{icon}</div>;
  const renderBody = (
    <div className="list__item-body">
      {children}
      {title && <h3 className={renderTitleClassNames}>{title}</h3>}
    </div>
  );
  const renderMark = <div className={renderMarkClassNames}>{mark}</div>;

  return link ? (
    <li>
      <Link className={renderClassNames} to={link}>
        {renderIcon}
        {renderBody}
        {renderMark}
      </Link>
    </li>
  ) : (
    <li className={renderClassNames}>
      {renderIcon}
      {renderBody}
      {renderMark}
    </li>
  );
};

ListItem.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  title: PropTypes.string,
  titleClass: PropTypes.string,
  mark: PropTypes.node,
  markClass: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
  iconClass: PropTypes.string,
};

ListItem.defaultProps = {
  children: undefined,
  link: "",
  title: "",
  titleClass: "",
  mark: undefined,
  markClass: "",
  className: "",
  icon: undefined,
  iconClass: "",
};
