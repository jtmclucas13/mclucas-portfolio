import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaLink, FaLock } from "react-icons/fa";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Icon from "../components/icon/icon";
import SvgSafeImage from "../components/svg-safe-image/svg-safe-image";

import styles from "./portfolio.module.scss";

//JTM is it worth it nesting it at /web/portfolio or should it just be /web-portfolio and /theater-portfolio?
// - componetize the section (left/right props)
// - drive it with GraphQL
// - call to action in between
// - tooltip in icons
// - delete unused icons
// - graphQL fragment for childImageSharp + extension + publicURL?

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

const PorfolioPage = () => {
    const brandLogo = useStaticQuery(LogoQuery).logo; //JTM useCallback/useMemo?

    return (
        <Layout contentClassName={styles.container}>
            <SEO
                title="Portfolio - Web"
                keywords={["gatsby", "application", "react"]}
            />
            <h1>Selected Web Experience</h1>
            <h2>(In reverse chronological order, most recent first)</h2>
            <div className={styles.itemContainer}>
                <div className={styles.imageContainer}>
                    <SvgSafeImage
                        alt="URBN logo"
                        childImageSharp={brandLogo.childImageSharp}
                        className={styles.logoImage}
                        extension={brandLogo.extension}
                        publicURL={brandLogo.publicURL}
                    />
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
                        As a contractor at PromptWorks(link), I collaborated
                        with engineers at URBN to build the customer-facing app
                        for a new clothing rental service called Nuuly(link). I
                        led the PromptWorks team in building the account
                        management, product review, and report a problem
                        sections of the site using Vue. I was responsible for
                        kick-starting their unit testing, as well as managing
                        some third party integrations with services such as
                        Intercom and Braze.
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
        </Layout>
    );
};

export default PorfolioPage;
