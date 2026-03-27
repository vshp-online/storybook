import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";
import { CardDelete } from "./CardDelete.jsx";
import { CardRow } from "./CardRow.jsx";
import { CardTitle } from "./CardTitle.jsx";
import { CardSubtitle } from "./CardSubtitle.jsx";

export const Card = ({ children, className = "", cover, link, title = "", btnText = "Подробнее", ...props }) => {
  const renderClassNames = cnTransform("card", `${className}`);
  const CardLink = link;

  return (
    <div className={renderClassNames} {...props}>
      {cover &&
        (link ? (
          <CardLink className="card__header">
            {cover}
            <h2 className="card__header-title">{title}</h2>
          </CardLink>
        ) : (
          <div className="card__header">
            {cover}
            <h2 className="card__header-title">{title}</h2>
          </div>
        ))}

      <div className="card__body">{children}</div>
      {link && <CardLink className="btn btn_primary card__more">{btnText}</CardLink>}
    </div>
  );
};

Card.Delete = CardDelete;
Card.Row = CardRow;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;

Card.propTypes = {
  cover: PropTypes.node,
  title: PropTypes.string,
  link: PropTypes.elementType,
  btnText: PropTypes.string,
  className: PropTypes.string,
};
