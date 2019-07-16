/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.onCreateNode = ({ actions, getNode, node }) => {
    const { createNodeField } = actions;

    if (node && node.internal && node.internal.type === "MarkdownRemark") {
        const parent = getNode(node.parent);
        createNodeField({
            node,
            name: "collection",
            value: parent.sourceInstanceName,
        });
    }

    fmImagesToRelative(node);
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve(
        "src/components/blog-post/blog-post.js",
    );

    return graphql(`
        {
            allMarkdownRemark(
                filter: { fields: { collection: { eq: "blog" } } }
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {},
            });
        });
    });
};
