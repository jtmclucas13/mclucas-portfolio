import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import classNames from "classnames";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Layout from "../layout";
import SEO from "../seo";
import BasicButton from "../basic-button/basic-button";

import styles from "./blog-post.module.scss";

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
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
                path
                title
            }
            timeToRead
        }
        mdx(frontmatter: { path: { eq: $path } }) {
            body
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
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
                path
                title
            }
            timeToRead
        }
    }
`;

const BlogPost = ({ data, pageContext }) => {
    const { markdownRemark, mdx } = data;
    const actualData = markdownRemark || mdx;
    const {
        body,
        frontmatter: { date, images, title },
        html,
        timeToRead,
    } = actualData;
    const { prev, next } = pageContext;

    return (
        <Layout contentClassName={styles.container}>
            <SEO
                title={`Blog - ${title}`}
                keywords={["gatsby", "application", "react"]}
            />
            <div>
                <header className={styles.header}>
                    <h1 className={styles.marginlessLine}>{title}</h1>
                    <Link className={styles.homeButton} to="/blog">
                        <BasicButton>Blog Home</BasicButton>
                    </Link>
                </header>
                <p
                    className={classNames(
                        styles.blogDescription,
                        styles.marginlessLine,
                    )}
                >
                    {date}
                </p>
                <p className={styles.blogDescription}>
                    Estimated Time to Read: {timeToRead} minutes
                </p>
                <div className={styles.contentContainer}>
                    {body ? (
                        <MDXRenderer images={images}>{body}</MDXRenderer>
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    )}
                </div>
                <div className={styles.prevNextContainer}>
                    {prev && (
                        <Link
                            className={styles.prevItem}
                            to={prev.node.frontmatter.path}
                        >
                            <FaChevronLeft />
                            {prev.node.frontmatter.title}
                        </Link>
                    )}
                    {next && (
                        <Link
                            className={styles.nextItem}
                            to={next.node.frontmatter.path}
                        >
                            {next.node.frontmatter.title}
                            <FaChevronRight />
                        </Link>
                    )}
                </div>
            </div>
        </Layout>
    );
};

BlogPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
                date: PropTypes.string,
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        caption: PropTypes.string,
                        src: PropTypes.object,
                    }),
                ),
                title: PropTypes.shape,
            }),
            html: PropTypes.string,
            timeToRead: PropTypes.number,
        }),
        mdx: PropTypes.shape({
            body: PropTypes.string,
            frontmatter: PropTypes.shape({
                date: PropTypes.string,
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        caption: PropTypes.string,
                        src: PropTypes.object,
                    }),
                ),
                title: PropTypes.string,
            }),
            timeToRead: PropTypes.number,
        }),
    }),
    pageContext: PropTypes.shape({
        isCreatedByStatefulCreatePages: PropTypes.bool,
        next: PropTypes.shape({
            node: PropTypes.shape({
                frontmatter: PropTypes.shape({
                    date: PropTypes.string,
                    path: PropTypes.string,
                    title: PropTypes.string,
                }),
                id: PropTypes.string,
            }),
        }),
        prev: PropTypes.shape({
            node: PropTypes.shape({
                frontmatter: PropTypes.shape({
                    date: PropTypes.string,
                    path: PropTypes.string,
                    title: PropTypes.string,
                }),
                id: PropTypes.string,
            }),
        }),
    }),
};

export default BlogPost;
