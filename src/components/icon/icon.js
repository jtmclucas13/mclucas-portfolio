import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import ReactTooltip from "react-tooltip";

import SvgSafeImage from "../svg-safe-image/svg-safe-image";

const AllIconsQuery = graphql`
    query {
        allFile(filter: { relativePath: { regex: "/icons/" } }) {
            edges {
                node {
                    ...SvgSafeImage
                    name
                }
            }
        }
    }
`;

const Icon = ({ alt, className, idPrefix, name, tooltip }) => {
    const data = useStaticQuery(AllIconsQuery);
    const matchedFile = useMemo(
        () => data.allFile.edges.find(edge => edge.node.name === name),
        [data, name],
    );

    if (!matchedFile) {
        throw new Error(`Icon '${name}' not found!`);
    }

    const fluidData = matchedFile.node;

    return (
        <React.Fragment>
            <SvgSafeImage
                alt={alt}
                childImageSharp={fluidData.childImageSharp}
                className={className}
                data-tip
                data-for={`${idPrefix}-${name}-tooltip`}
                extension={fluidData.extension}
                publicURL={fluidData.publicURL}
            />
            {tooltip && (
                <ReactTooltip id={`${idPrefix}-${name}-tooltip`} effect="solid">
                    {tooltip}
                </ReactTooltip>
            )}
        </React.Fragment>
    );
};

Icon.propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    idPrefix: PropTypes.string,
    name: PropTypes.string,
    tooltip: PropTypes.string,
};

export default Icon;
