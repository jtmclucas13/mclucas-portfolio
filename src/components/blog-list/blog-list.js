import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import classNames from "classnames";

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
                        date(formatString: "MMMM DD, YYYY")
                    }
                    excerpt(pruneLength: 350)
                    timeToRead
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
                        date(formatString: "MMMM DD, YYYY")
                    }
                    excerpt(pruneLength: 350)
                    timeToRead
                }
            }
        }
    }
`;

const BlogList = ({ data, location, pageContext }) => {
    const { markdownPages, mdxPages } = data;
    const allEdges = mergeAndSortBlogEdges(markdownPages, mdxPages);

    return (
        <Layout contentClassName={styles.container}>
            <SEO
                description="Joshua McLucas writes articles on art, technology, theater, and everything in between."
                path={location.pathname}
                title="Blog"
            />
            <h1>Blog Home</h1>

            {allEdges.map(({ node }) => (
                <div
                    className={styles.postContainer}
                    key={node.frontmatter.path}
                >
                    <Link to={node.frontmatter.path}>
                        <h2 className={styles.marginlessLine}>
                            {node.frontmatter.title}
                        </h2>
                    </Link>
                    <p
                        className={classNames(
                            styles.blogDescription,
                            styles.marginlessLine,
                        )}
                    >
                        {node.frontmatter.date}
                    </p>
                    <p className={styles.blogDescription}>
                        Estimated Time to Read: {node.timeToRead} minutes
                    </p>
                    <p>{node.excerpt}</p>
                </div>
            ))}

            <ul className={styles.pageList}>
                {Array.from({ length: pageContext.numPages }).map((item, i) => {
                    const index = i + 1;
                    const link = index === 1 ? "/blog" : `/blog/page/${index}`;

                    return (
                        <li key={i}>
                            {pageContext.currentPage === index ? (
                                <span className={styles.currentPage}>
                                    {index}
                                </span>
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
                        excerpt: PropTypes.string,
                        timeToRead: PropTypes.number,
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
                        excerpt: PropTypes.string,
                        timeToRead: PropTypes.number,
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
