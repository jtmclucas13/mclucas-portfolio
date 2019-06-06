import React from "react";
import PropTypes from "prop-types";
import GatsbyImage from "gatsby-image";

const SvgSafeImage = ({ childImageSharp, extension, publicURL, ...rest }) => {
    if (!childImageSharp && extension === "svg") {
        return <img src={publicURL} {...rest} />;
    }
    return <GatsbyImage {...childImageSharp} {...rest} />;
};

SvgSafeImage.propTypes = {
    childImageSharp: PropTypes.object,
    extension: PropTypes.string,
    publicURL: PropTypes.string,
};

export default SvgSafeImage;
