import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";
import { Link } from "react-router-dom";

export const Card = ({
  children,
  className,
  cover,
  link,
  title,
  btnText,
  ...props
}) => {
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
};

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
