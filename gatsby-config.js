module.exports = {
    siteMetadata: {
        title: "Joshua McLucas - Theater Artist and Software Engineer",
        description:
            "The web home of Philadelphia-based theater artist and software engineer, Joshua McLucas.",
        author: "Joshua McLucas",
        authorHandle: "@jtmclucas13",
        siteUrl: "https://www.joshuamclucas.com",
        menuLinks: [
            {
                name: "Home",
                link: "/",
            },
            {
                name: "Web",
                link: "/web",
            },
            {
                name: "Theater",
                link: "/theater-portfolio",
            },
            {
                name: "Blog",
                link: "/blog",
            },
            {
                name: "Contact",
                link: "/contact",
            },
        ],
    },
    plugins: [
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-42380144-1",
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/styles/typography.js",
            },
        },
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "portfolio",
                path: `${__dirname}/src/files/portfolio`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "files",
                path: `${__dirname}/src/files/static`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog",
                path: `${__dirname}/src/files/blog`,
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    "gatsby-remark-relative-images",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 300,
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [".mdx"],
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 300,
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                icon: "src/images/favicon.png",
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ],
};
