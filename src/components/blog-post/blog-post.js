import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../layout";
import SEO from "../seo";

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;

const BlogPost = ({ data }) => {
    const {
        markdownRemark: {
            frontmatter: { date, title },
            html,
        },
    } = data;
    return (
        <Layout>
            <SEO
                title={`Blog - ${title}`}
                keywords={["gatsby", "application", "react"]}
            />
            <div>
                <h1>{title}</h1>
                <h2>{date}</h2>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    );
};

BlogPost.propTypes = {
    data: PropTypes.object, //JTM beef up
};

export default BlogPost;
