import React from "react";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaLink, FaLock } from "react-icons/fa";

import styles from "./portfolio.module.scss";

//JTM is it worth it nesting it at /web/portfolio or should it just be /web-portfolio and /theater-portfolio?
// - componetize the section (left/right props)
// - drive it with GraphQL
// - call to action in between

const LogoQuery = graphql`
    query {
        logo: file(relativePath: { eq: "icons/urbn-logo.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const PorfolioPage = () => (
    <Layout contentClassName={styles.container}>
        <SEO
            title="Portfolio - Web"
            keywords={["gatsby", "application", "react"]}
        />
        <h1>Selected Web Experience</h1>
        <h2>(In reverse chronological order, most recent first)</h2>
        <div className={styles.itemContainer}>
            <div className={styles.imageContainer}>
                <Img
                    className={styles.logoImage}
                    fluid={useStaticQuery(LogoQuery).logo.childImageSharp.fluid}
                    alt="URBN logo"
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
                    As a contractor at PromptWorks(link), I collaborated with
                    engineers at URBN to build the customer-facing app for a new
                    clothing rental service called Nuuly(link). I led the
                    PromptWorks team in building the account management, product
                    review, and report a problem sections of the site using Vue.
                    I was responsible for kick-starting their unit testing, as
                    well as managing some third party integrations with services
                    such as Intercom and Braze.
                </p>
                <div>
                    Tech icon field here (hover tooltip for tech name) Vue,
                    Storybook, Jest
                </div>
            </div>
        </div>
    </Layout>
);

export default PorfolioPage;
