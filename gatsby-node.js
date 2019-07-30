/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const {
    getNumberOfPostsOfType,
    mergeAndSortBlogEdges,
} = require("./src/utils/blog.js");

exports.onCreateNode = ({ actions, getNode, node }) => {
    const { createNodeField } = actions;

    const markdownTypes = ["MarkdownRemark", "Mdx"];
    if (node && node.internal && markdownTypes.includes(node.internal.type)) {
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
    const blogListLayout = path.resolve(
        "src/components/blog-list/blog-list.js",
    );

    return graphql(`
        {
            markdownPages: allMarkdownRemark(
                filter: { fields: { collection: { eq: "blog" } } }
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            date
                            path
                            title
                        }
                    }
                }
            }
            mdxPages: allMdx(
                filter: { fields: { collection: { eq: "blog" } } }
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            date
                            path
                            title
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        const { markdownPages, mdxPages } = result.data;
        const allEdges = mergeAndSortBlogEdges(markdownPages, mdxPages);
        const totalResults = allEdges.length;
        const postsPerPage = 10;
        const numPages = Math.ceil(totalResults / postsPerPage);

        let markdownPostsAccountedFor = 0;
        let mdxPostsAccountedFor = 0;
        Array.from({ length: numPages }).forEach((_, i) => {
            const currentPagePosts = allEdges.slice(
                i * postsPerPage,
                (i + 1) * postsPerPage,
            );
            const markdownPostsInPage = getNumberOfPostsOfType(
                currentPagePosts,
                markdownPages,
            );
            const mdxPostsInPage = getNumberOfPostsOfType(
                currentPagePosts,
                mdxPages,
            );
            createPage({
                path: i === 0 ? "/blog" : `/blog/page/${i + 1}`,
                component: blogListLayout,
                context: {
                    markdownLimit: markdownPostsInPage,
                    mdxLimit: mdxPostsInPage,
                    markdownSkip: markdownPostsAccountedFor,
                    mdxSkip: mdxPostsAccountedFor,
                    currentPage: i + 1,
                    numPages,
                },
            });
            markdownPostsAccountedFor += markdownPostsInPage;
            mdxPostsAccountedFor += mdxPostsInPage;
        });

        allEdges.forEach(({ node }, index) => {
            const prev = allEdges[index - 1];
            const next = allEdges[index + 1];

            createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {
                    prev: prev,
                    next: next,
                },
            });
        });
    });
};
