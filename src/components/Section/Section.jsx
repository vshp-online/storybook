import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { cnTransform } from "../../utils/cn-transform";
import { BodySmall } from "./SectionBodySmall";

const SectionComponent = ({ children, className, border, coverSrc, coverAlt, coverType, centered, ...props }) => {
  const modeDecor = border && "page__block_border";
  const modeCentered = centered && "page__block-body_center";
  const modeCover = coverSrc.length > 0 && "page__block_cover";
  const modeCoverType = coverType.length > 0 && `page__block_cover_${coverType}`;

  const renderClassNames = cnTransform("page__block", modeDecor, modeCover, modeCentered, modeCoverType, `${className}`);
  return (
    <section className={renderClassNames} {...props}>
      {coverSrc.length > 0 ? (
        <>
          <img className="page__block-img" src={coverSrc} alt={coverAlt} />
          <div className="page__block-body">{children}</div>
        </>
      ) : (
        children
      )}
    </section>
  );
};

export const Section = Object.assign(SectionComponent, { BodySmall });

Section.propTypes = {
  children: PropTypes.node,
  coverAlt: PropTypes.string,
  border: PropTypes.bool,
  className: PropTypes.string,
  coverSrc: PropTypes.string,
  centered: PropTypes.bool,
  coverType: PropTypes.string,
};

Section.defaultProps = {
  children: undefined,
  coverAlt: "",
  border: false,
  className: "",
  coverSrc: "",
  centered: false,
  coverType: "",
};
