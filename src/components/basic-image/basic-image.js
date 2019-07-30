import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import SvgSafeImage from "../svg-safe-image/svg-safe-image";

import styles from "./basic-image.module.scss";

//JTM
// - wtf is happening with the typography styles? ever since i yarn upgrade'd they're borked (loading after scss)
// - the path to /blog/new-year-new-me is still showing an import statement in the markdown...why??
// - is the maxWidth configuration inside of gatsby-config the reason why the images look shitty in my theater portfolio?
// -i don't like that this has the reversal logic in it - move out and accept a className prop instead
const BasicImage = ({
    alt,
    bannerText,
    caption,
    childImageSharp,
    extension,
    publicURL,
    isBlogImage,
    shouldReverse,
}) => (
    <div
        className={classnames(styles.imageContainer, {
            [styles.reversed]: shouldReverse,
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
        {bannerText && <div className={styles.banner}>{bannerText}</div>}
    </div>
);

BasicImage.propTypes = {
    alt: PropTypes.string,
    bannerText: PropTypes.string,
    caption: PropTypes.string,
    childImageSharp: PropTypes.object,
    extension: PropTypes.string,
    publicURL: PropTypes.string,
    shouldReverse: PropTypes.bool,
};

export default BasicImage;
