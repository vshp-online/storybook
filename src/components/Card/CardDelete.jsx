import React from "react";
import PropTypes from "prop-types";

import { cnTransform } from "../../utils/cn-transform";

export const CardDelete = ({ className = "", isDelete = false, btnDelete, textConfirm = "Вы уверены, что хотите удалить данную программу?", btnConfirm, btnCancel }) => {
  const modeDeleteBackdrop = isDelete && "card__delete-backdrop_active";
  const renderClassNames = cnTransform(`${className}`, "card__delete-backdrop", modeDeleteBackdrop);

  return (
    <>
      {btnDelete}

      <div className={renderClassNames}>
        <div className="card__delete-backdrop-title">{textConfirm}</div>
        <div className="card__delete-backdrop-buttons">
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
