function mergeAndSortBlogEdges(markdownPages, mdxPages) {
    const { edges: markdownEdges = [] } = markdownPages;
    const { edges: mdxEdges = [] } = mdxPages;
    const allEdges = markdownEdges.concat(mdxEdges);
    allEdges.sort((a, b) => {
        const firstDate = a.node.frontmatter.date;
        const secondDate = b.node.frontmatter.date;

        const firstEpoch = new Date(firstDate).getTime();
        const secondEpoch = new Date(secondDate).getTime();

        if (firstEpoch < secondEpoch) {
            return 1;
        } else if (firstEpoch > secondEpoch) {
            return -1;
        }

        return 0;
    });

    return allEdges;
}

function getNumberOfPostsOfType(allPosts, postSubset) {
    const { edges: edgesToSearch = [] } = postSubset;
    const postsOfTypeInSubset = allPosts.filter(post => {
        const {
            node: { id: idToFind },
        } = post;
        return !!edgesToSearch.find(edge => edge.node.id === idToFind);
    });

    return postsOfTypeInSubset.length || 0;
}

module.exports = {
    getNumberOfPostsOfType,
    mergeAndSortBlogEdges,
};
