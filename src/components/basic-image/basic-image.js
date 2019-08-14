import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import SvgSafeImage from "../svg-safe-image/svg-safe-image";

import styles from "./basic-image.module.scss";

const BasicImage = ({
    alt,
    bannerClass,
    bannerText,
    caption,
    childImageSharp,
    className,
    extension,
    publicURL,
    isBlogImage,
}) => (
    <div
        className={classnames(styles.imageContainer, className, {
            [styles.blogImage]: isBlogImage,
        })}
    >
        <SvgSafeImage
            alt={alt}
            childImageSharp={childImageSharp}
            extension={extension}
            publicURL={publicURL}
        />
        {caption && <div className={styles.captionContainer}>{caption}</div>}
        {bannerText && (
            <div className={classnames(styles.banner, bannerClass)}>
                {bannerText}
            </div>
        )}
    </div>
);

BasicImage.propTypes = {
    alt: PropTypes.string,
    bannerClass: PropTypes.string,
    bannerText: PropTypes.string,
    caption: PropTypes.string,
    childImageSharp: PropTypes.object,
    className: PropTypes.string,
    extension: PropTypes.string,
    publicURL: PropTypes.string,
};

export default BasicImage;
