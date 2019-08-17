import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import classnames from "classnames";

import styles from "./image.module.scss";

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
        heroImage: file(relativePath: { eq: "headshot-white.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        heroImageSmall: file(relativePath: { eq: "headshot-white-small.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const Image = ({ className }) => {
    const data = useStaticQuery(ImageQuery);
    return (
        <React.Fragment>
            <Img
                className={classnames(styles.smallImage, className)}
                loading="eager"
                fluid={data.heroImageSmall.childImageSharp.fluid}
                alt="Joshua McLucas headshot"
            />
            <Img
                className={classnames(styles.largeImage, className)}
                loading="eager"
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Joshua McLucas headshot"
            />
        </React.Fragment>
    );
};

export default Image;
