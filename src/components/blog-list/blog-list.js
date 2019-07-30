import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";

import { mergeAndSortBlogEdges } from "../../utils/blog";
import Layout from "../layout";
import SEO from "../seo";

import styles from "./blog-list.module.scss";

export const query = graphql`
    query blogPostsList(
        $markdownSkip: Int!
        $mdxSkip: Int!
        $markdownLimit: Int!
        $mdxLimit: Int!
    ) {
        markdownPages: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fields: { collection: { eq: "blog" } } }
            limit: $markdownLimit
            skip: $markdownSkip
        ) {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        date
                    }
                }
            }
        }
        mdxPages: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fields: { collection: { eq: "blog" } } }
            limit: $mdxLimit
            skip: $mdxSkip
        ) {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        date
                    }
                }
            }
        }
    }
`;

//JTM
// - h1 is too wide, something's hapnin here
// - propTypes
// - excerpt
// - h1 tag on page (and post)
const BlogList = ({ data, pageContext }) => {
    const { markdownPages, mdxPages } = data;
    const allEdges = mergeAndSortBlogEdges(markdownPages, mdxPages);

    return (
        <Layout contentClassName={styles.container}>
            <SEO title="Blog" keywords={["gatsby", "application", "react"]} />
            {allEdges.map(({ node }) => (
                <React.Fragment key={node.frontmatter.path}>
                    <Link to={node.frontmatter.path}>
                        <h1>{node.frontmatter.title}</h1>
                    </Link>
                    <p>{node.frontmatter.date}</p>
                </React.Fragment>
            ))}

            <ul>
                {Array.from({ length: pageContext.numPages }).map((item, i) => {
                    const index = i + 1;
                    const link = index === 1 ? "/blog" : `/blog/page/${index}`;

                    return (
                        <li key={i}>
                            {pageContext.currentPage === index ? (
                                <span>{index}</span>
                            ) : (
                                <a href={link}>{index}</a>
                            )}
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
};

BlogList.propTypes = {
    data: PropTypes.shape({
        markdownPages: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            date: PropTypes.string,
                            path: PropTypes.string,
                            title: PropTypes.string,
                        }),
                    }),
                }),
            ),
        }),
        mdxPages: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            date: PropTypes.string,
                            path: PropTypes.string,
                            title: PropTypes.string,
                        }),
                    }),
                }),
            ),
        }),
    }),
    pageContext: PropTypes.shape({
        currentPage: PropTypes.number,
        isCreatedByStatefulCreatePages: PropTypes.bool,
        markdownLimit: PropTypes.number,
        markdownSkip: PropTypes.number,
        mdxLimit: PropTypes.number,
        mdxSkip: PropTypes.number,
        numPages: PropTypes.number,
    }),
};

export default BlogList;
