import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PortfolioSection from "../components/portfolio-section/portfolio-section";

import styles from "./portfolio.module.scss";

//JTM is it worth it nesting it at /web/portfolio or should it just be /web-portfolio and /theater-portfolio?
// - drive it with GraphQL
// - call to action in between
// - tooltip in icons
// - delete unused icons
// - graphQL fragment for childImageSharp + extension + publicURL?

const PortfolioPage = () => {
    return (
        <Layout contentClassName={styles.container}>
            <SEO
                title="Portfolio - Web"
                keywords={["gatsby", "application", "react"]}
            />
            <h1>Selected Web Experience</h1>
            <h2>(In reverse chronological order, most recent first)</h2>
            <PortfolioSection className={styles.portfolioSection} />
            <PortfolioSection
                className={styles.portfolioSection}
                shouldReverse={true}
            />
        </Layout>
    );
};

export default PortfolioPage;
