import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { FaLink, FaLock, FaGithub } from "react-icons/fa";

import Icon from "../icon/icon";
import SvgSafeImage from "../svg-safe-image/svg-safe-image";

import styles from "./portfolio-section.module.scss";

const PortfolioSection = ({
    body,
    className,
    logoImage,
    projectLink,
    projectName,
    repositoryLink,
    shouldReverse,
    title,
    toolsUsed,
}) => {
    const containerClasses = classnames(styles.itemContainer, className, {
        [styles.reversed]: shouldReverse,
    });

    return (
        <div className={containerClasses}>
            <div className={styles.imageContainer}>
                <div className={styles.logoImageContainer}>
                    <SvgSafeImage
                        alt={`${projectName} logo`}
                        childImageSharp={logoImage.childImageSharp}
                        extension={logoImage.extension}
                        publicURL={logoImage.publicURL}
                    />
                </div>
                <div className={styles.projectDescriptor}>
                    {repositoryLink ? (
                        <React.Fragment>
                            <FaGithub />
                            {repositoryLink}
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <FaLock />
                            Repository is private
                        </React.Fragment>
                    )}
                </div>
                <div className={styles.projectDescriptor}>
                    <FaLink />
                    <a href={projectLink}>{projectName} home page</a>
                </div>
            </div>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: body }} />
                <div className={styles.iconContainer}>
                    {toolsUsed.map(tool => (
                        <Icon
                            key={tool.name}
                            alt={tool.alt}
                            className={styles.icon}
                            name={tool.name}
                            tooltip={tool.tooltip}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

PortfolioSection.propTypes = {
    body: PropTypes.string,
    className: PropTypes.string,
    logoImage: PropTypes.shape({
        childImageSharp: PropTypes.object,
        extension: PropTypes.string,
        publicURL: PropTypes.string,
    }),
    projectLink: PropTypes.string,
    projectName: PropTypes.string,
    repositoryLink: PropTypes.string,
    shouldReverse: PropTypes.bool,
    title: PropTypes.string,
    toolsUsed: PropTypes.arrayOf(
        PropTypes.shape({
            alt: PropTypes.string,
            name: PropTypes.string,
            tooltip: PropTypes.string,
        }),
    ),
};

export default PortfolioSection;
