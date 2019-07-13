import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TheaterPortfolioSection from "../components/theater-portfolio-section/theater-portfolio-section";
import BannerCta from "../components/banner-cta/banner-cta";

import styles from "./portfolio.module.scss";

const TheaterPortfolioQuery = graphql`
    query {
        sections: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "//theater-portfolio/(?!archive)/" }
            }
            sort: { fields: frontmatter___endDate, order: DESC }
        ) {
            edges {
                node {
                    fileAbsolutePath
                    frontmatter {
                        projectName
                        startDate
                        endDate
                        images {
                            caption
                            src {
                                childImageSharp {
                                    fluid(maxWidth: 800) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        director
                        playwright
                        reviewQuotes {
                            author
                            citation
                            publication
                            text
                        }
                        venue
                    }
                }
            }
        }
    }
`;

//JTM
// - implement premiere & other individual features
// - implement filter for all vs. director vs. actor
// - re-download photos from primary source where possible
// - rename PortfolioSection to WebPortfolioSection?
// - can we share a layout between the two sections?

const TheaterPortfolio = () => {
    const sections = useStaticQuery(TheaterPortfolioQuery).sections.edges;

    return (
        <Layout contentClassName={styles.container}>
            <SEO
                title="Portfolio - Theater"
                keywords={["gatsby", "application", "react"]}
            />
            <h1>Selected Theater Experience</h1>
            <h2>(In reverse chronological order, most recent first)</h2>
            {sections.map(({ node: section }, index) => (
                <React.Fragment key={section.fileAbsolutePath}>
                    <TheaterPortfolioSection
                        className={styles.portfolioSection}
                        director={section.frontmatter.director}
                        images={section.frontmatter.images}
                        playwright={section.frontmatter.playwright}
                        projectName={section.frontmatter.projectName}
                        shouldReverse={index % 2 !== 0}
                        quotes={section.frontmatter.reviewQuotes}
                        venue={section.frontmatter.venue}
                    />
                    {index === 0 && (
                        <BannerCta
                            bannerText="Want to work with me? Send me a message!"
                            buttonText="Contact Me"
                            onButtonClick={() => navigate("/contact")}
                        />
                    )}
                </React.Fragment>
            ))}
        </Layout>
    );
};

export default TheaterPortfolio;
