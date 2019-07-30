import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../layout";
import SEO from "../seo";

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
                <h1>{title}</h1>
                <h2>{date}</h2>
                <p>Estimated Time to Read: {timeToRead} minutes</p>
                {body ? (
                    <MDXRenderer images={images}>{body}</MDXRenderer>
                ) : (
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                )}
                {prev && (
                    <Link to={prev.node.frontmatter.path}>
                        {"<"} {prev.node.frontmatter.title}
                    </Link>
                )}

                {next && (
                    <Link to={next.node.frontmatter.path}>
                        {next.node.frontmatter.title} {">"}
                    </Link>
                )}
            </div>
        </Layout>
    );
};

BlogPost.propTypes = {
    data: PropTypes.object, //JTM beef up
    pageContext: PropTypes.object,
};

export default BlogPost;
