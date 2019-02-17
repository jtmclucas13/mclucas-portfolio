import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const ImageQuery = graphql`
    query {
        placeholderImage: file(relativePath: { eq: "headshot-white.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const Image = () => {
    const data = useStaticQuery(ImageQuery);
    return (
        <Img
            critical={true}
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Joshua McLucas headshot"
        />
    );
};

export default Image;
