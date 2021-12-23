import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";
import { Link } from "react-router-dom";
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
    const {
      children,
      className,
      cover,
      link,
      title,
      btnText,
      ...props
    } = this.props;
    const renderClassNames = cnTransform("card", `${className}`);

    return (
      <div className={renderClassNames} {...props}>
        {cover && (
          <Link className="card__header" to={link}>
            {cover}
            <h2 className="card__header-title">{title}</h2>
          </Link>
        )}

        <div className="card__body">{children}</div>
        <Link className="btn btn_primary card__more" to={link}>
          {btnText}
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  cover: PropTypes.node,
  title: PropTypes.string,
  link: PropTypes.string,
  btnText: PropTypes.string,
  className: PropTypes.string,
};

Card.defaultProps = {
  cover: undefined,
  title: "",
  link: "",
  btnText: "Подробнее",
  className: "",
};
