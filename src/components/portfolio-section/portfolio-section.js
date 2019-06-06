import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import { FaLink, FaLock } from "react-icons/fa";

import Icon from "../icon/icon";
import SvgSafeImage from "../svg-safe-image/svg-safe-image";

import styles from "./portfolio-section.module.scss";

const LogoQuery = graphql`
    query {
        logo: file(relativePath: { eq: "urbn-logo.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
            extension
            publicURL
        }
    }
`;

const PortfolioSection = ({ className, shouldReverse }) => {
    const brandLogo = useStaticQuery(LogoQuery).logo; //JTM useCallback/useMemo?
    const containerClasses = classnames(styles.itemContainer, className, {
        [styles.reversed]: shouldReverse,
    });

    return (
        <div className={containerClasses}>
            <div className={styles.imageContainer}>
                <div className={styles.logoImageContainer}>
                    <SvgSafeImage
                        alt="URBN logo"
                        childImageSharp={brandLogo.childImageSharp}
                        extension={brandLogo.extension}
                        publicURL={brandLogo.publicURL}
                    />
                </div>
                <div className={styles.projectDescriptor}>
                    <FaLock />
                    Repository is private
                </div>
                <div className={styles.projectDescriptor}>
                    <FaLink />
                    Nuuly home page
                </div>
            </div>
            <div className={styles.textContainer}>
                <h3>Building a new brand</h3>
                <p>
                    As a contractor at PromptWorks(link), I collaborated with
                    engineers at URBN to build the customer-facing app for a new
                    clothing rental service called Nuuly(link). I led the
                    PromptWorks team in building the account management, product
                    review, and report a problem sections of the site using Vue.
                    I was responsible for kick-starting their unit testing, as
                    well as managing some third party integrations with services
                    such as Intercom and Braze.
                </p>
                <div className={styles.iconContainer}>
                    <Icon
                        alt="Vue logo"
                        className={styles.icon}
                        name="vue-logo"
                        tooltip="Vue JS"
                    />
                    <Icon
                        alt="Storybook logo"
                        className={styles.icon}
                        name="storybook-logo"
                        tooltip="Storybook"
                    />
                    <Icon
                        alt="Jest logo"
                        className={styles.icon}
                        name="jest-logo"
                        tooltip="Jest"
                    />
                </div>
            </div>
        </div>
    );
};

PortfolioSection.propTypes = {
    className: PropTypes.string,
    shouldReverse: PropTypes.bool,
};

export default PortfolioSection;
