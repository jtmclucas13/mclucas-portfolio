import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const AllIconsQuery = graphql`
    query {
        allFile(filter: { relativePath: { regex: "/icons/" } }) {
            edges {
                node {
                    name
                    childImageSharp {
                        fluid(maxWidth: 50) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;

const Icon = ({ alt, className, name }) => {
    const data = useStaticQuery(AllIconsQuery);
    const matchedFile = useMemo(
        () => data.allFile.edges.find(edge => edge.node.name === name),
        [data, name],
    );

    if (!matchedFile) {
        throw new Error(`Icon '${name}' not found!`);
    }

    const fluidData = matchedFile.node.childImageSharp.fluid;

    return <Img className={className} fluid={fluidData} alt={alt} />;
};

Icon.propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
};

export default Icon;
