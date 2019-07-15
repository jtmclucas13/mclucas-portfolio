import React, { useState } from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { CSSTransitionGroup } from "react-transition-group";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TheaterPortfolioSection from "../components/theater-portfolio-section/theater-portfolio-section";
import BannerCta from "../components/banner-cta/banner-cta";
import TheaterFilter from "../components/theater-filter/theater-filter";

import styles from "./theater-portfolio.module.scss";

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
                        character
                        company
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
                        location
                        playwright
                        premiere
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

const filterStates = {
    ACTING: section => !!section.node.frontmatter.character,
    ALL: section => !!section,
    DIRECTING: section =>
        section.node.frontmatter.director === "Joshua McLucas",
};

const useTheaterSections = () => {
    const [activeFilter, setActiveFilter] = useState("ALL");
    const sections = useStaticQuery(TheaterPortfolioQuery).sections.edges;
    const activeSections = sections.filter(filterStates[activeFilter]);
    return [activeFilter, activeSections, setActiveFilter];
};

const TheaterPortfolio = () => {
    const [
        activeFilter,
        activeSections,
        setActiveFilter,
    ] = useTheaterSections();

    return (
        <Layout contentClassName={styles.container}>
            <SEO
                title="Portfolio - Theater"
                keywords={["gatsby", "application", "react"]}
            />
            <h1>Selected Theater Experience</h1>
            <h2>(In reverse chronological order, most recent first)</h2>
            <div className={styles.filterContainer}>
                <TheaterFilter
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />
            </div>
            {activeSections.map(({ node: section }, index) => (
                <CSSTransitionGroup
                    className={styles.portfolioSectionContainer}
                    component="div"
                    key={`${section.fileAbsolutePath}-${activeFilter}`}
                    transitionName="fadeIn"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={true}
                    transitionEnterTimeout={500}
                    transitionLeave={false}
                >
                    <TheaterPortfolioSection
                        character={section.frontmatter.character}
                        className={styles.portfolioSection}
                        company={section.frontmatter.company}
                        director={section.frontmatter.director}
                        images={section.frontmatter.images}
                        location={section.frontmatter.location}
                        playwright={section.frontmatter.playwright}
                        premiere={section.frontmatter.premiere}
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
                </CSSTransitionGroup>
            ))}
        </Layout>
    );
};

export default TheaterPortfolio;
