import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import GatsbyImage from "gatsby-image";

export const svgSafeImageFragment = graphql`
    fragment SvgSafeImage on File {
        childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
        }
        extension
        publicURL
    }
`;

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
