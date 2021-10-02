import React from "react";
import PropTypes from "prop-types";

import { cnTransform } from "../../utils/cn-transform";

export const CardDelete = ({
  className,
  isDelete,
  btnDelete,
  textConfirm,
  btnConfirm,
  btnCancel,
}) => {
  const modeDeleteBackdrop = isDelete && "card__delete-backdrop_active";
  const renderClassNames = cnTransform(
    `${className}`,
    "card__delete-backdrop",
    modeDeleteBackdrop
  );

  return (
    <>
      {btnDelete}

      <div className={renderClassNames}>
        <div className="card__delete-title">{textConfirm}</div>
        <div className="card__delete-buttons">
          {btnConfirm}
          {btnCancel}
        </div>
      </div>
    </>
  );
};

CardDelete.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  btnDelete: PropTypes.node,
  isDelete: PropTypes.bool,
  textConfirm: PropTypes.string,
  btnConfirm: PropTypes.node,
  btnCancel: PropTypes.node,
};

CardDelete.defaultProps = {
  children: undefined,
  className: "",
  btnDelete: undefined,
  isDelete: false,
  textConfirm: "Вы уверены, что хотите удалить данную программу?",
  btnConfirm: undefined,
  btnCancel: undefined,
};
