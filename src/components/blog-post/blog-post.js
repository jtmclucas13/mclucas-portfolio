import React from "react";
import { graphql } from "gatsby";
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
        }
    }
`;

const BlogPost = ({ data }) => {
    const { markdownRemark, mdx } = data;
    const actualData = markdownRemark || mdx;
    const {
        body,
        frontmatter: { date, images, title },
        html,
    } = actualData;
    return (
        <Layout contentClassName={styles.container}>
            <SEO
                title={`Blog - ${title}`}
                keywords={["gatsby", "application", "react"]}
            />
            <div>
                <h1>{title}</h1>
                <h2>{date}</h2>
                {body ? (
                    <MDXRenderer images={images}>{body}</MDXRenderer>
                ) : (
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                )}
            </div>
        </Layout>
    );
};

BlogPost.propTypes = {
    data: PropTypes.object, //JTM beef up
};

export default BlogPost;
