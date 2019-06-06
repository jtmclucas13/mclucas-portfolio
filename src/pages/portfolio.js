import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PortfolioSection from "../components/portfolio-section/portfolio-section";

import styles from "./portfolio.module.scss";

//JTM is it worth it nesting it at /web/portfolio or should it just be /web-portfolio and /theater-portfolio?
// - call to action in between?
// - responsive design

const WebPortfolioQuery = graphql`
    query {
        sections: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "//web-portfolio/(?!archive)/" }
            }
            sort: { fields: frontmatter___endDate, order: DESC }
        ) {
            edges {
                node {
                    fileAbsolutePath
                    frontmatter {
                        title
                        startDate
                        endDate
                        logoImage {
                            ...SvgSafeImage
                        }
                        repositoryLink
                        projectLink
                        projectName
                        toolsUsed {
                            tooltip
                            alt
                            name
                        }
                    }
                    html
                }
            }
        }
    }
`;

const PortfolioPage = () => {
    const sections = useStaticQuery(WebPortfolioQuery).sections.edges;

    return (
        <Layout contentClassName={styles.container}>
            <SEO
                title="Portfolio - Web"
                keywords={["gatsby", "application", "react"]}
            />
            <h1>Selected Web Experience</h1>
            <h2>(In reverse chronological order, most recent first)</h2>
            {sections.map(({ node: section }, index) => (
                <PortfolioSection
                    key={section.fileAbsolutePath}
                    body={section.html}
                    className={styles.portfolioSection}
                    logoImage={section.frontmatter.logoImage}
                    projectLink={section.frontmatter.projectLink}
                    projectName={section.frontmatter.projectName}
                    repositoryLink={section.frontmatter.repositoryLink}
                    shouldReverse={index % 2 !== 0}
                    title={section.frontmatter.title}
                    toolsUsed={section.frontmatter.toolsUsed}
                />
            ))}
        </Layout>
    );
};

export default PortfolioPage;
