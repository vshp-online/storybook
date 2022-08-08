import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";
import { CardDelete } from "./CardDelete.jsx";
import { CardRow } from "./CardRow.jsx";
import { CardTitle } from "./CardTitle.jsx";
import { CardSubtitle } from "./CardSubtitle.jsx";

export class Card extends React.Component {
  static Delete = CardDelete;
  static Row = CardRow;
  static Title = CardTitle;
  static Subtitle = CardSubtitle;

  render() {
    const { children, className, cover, link, title, btnText, ...props } = this.props;
    const renderClassNames = cnTransform("card", `${className}`);
    const CardLink = link;

    return (
      <div className={renderClassNames} {...props}>
        {cover && (
          <CardLink className="card__header">
            {cover}
            <h2 className="card__header-title">{title}</h2>
          </CardLink>
        )}

        <div className="card__body">{children}</div>
        <CardLink className="btn btn_primary card__more">{btnText}</CardLink>
      </div>
    );
  }
}

Card.propTypes = {
  cover: PropTypes.node,
  title: PropTypes.string,
  link: PropTypes.elementType,
  btnText: PropTypes.string,
  className: PropTypes.string,
};

Card.defaultProps = {
  cover: undefined,
  title: "",
  link: undefined,
  btnText: "Подробнее",
  className: "",
};
