import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import WebPortfolioSection from "../components/web-portfolio-section/web-portfolio-section";
import BannerCta from "../components/banner-cta/banner-cta";

import styles from "./web-portfolio.module.scss";

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

const WebPortfolio = ({ location }) => {
    const sections = useStaticQuery(WebPortfolioQuery).sections.edges;

    return (
        <Layout contentClassName={styles.container}>
            <SEO
                description="Philadelphia-based software engineer Joshua McLucas highlights his biggest and most exciting development projects."
                path={location.pathname}
                title="Portfolio - Web"
            />
            <h1>Selected Web Experience</h1>
            <h2>(In reverse chronological order, most recent first)</h2>
            {sections.map(({ node: section }, index) => (
                <React.Fragment key={section.fileAbsolutePath}>
                    <WebPortfolioSection
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
                    {index === 0 && (
                        <BannerCta
                            bannerText="Like what you see? I'm just an email away."
                            buttonText="Contact Me"
                            onButtonClick={() => navigate("/contact")}
                        />
                    )}
                </React.Fragment>
            ))}
        </Layout>
    );
};

export default WebPortfolio;
