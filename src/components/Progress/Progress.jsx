import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";

export const Progress = ({ className, progress, ...props }) => {
  const renderClassNames = cnTransform("progress", `${className}`);

  const style = { width: `${progress}%` };

  return (
    <div className={renderClassNames} {...props}>
      <div className="progress__header">{progress}/100</div>
      <div className="progress__line-wrap">
        <div className="progress__line" style={style}></div>
      </div>
    </div>
  );
};

Progress.propTypes = {
  progress: PropTypes.number,
  className: PropTypes.string,
};

Progress.defaultProps = {
  progress: 0,
  className: "",
};
