import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, path, title }) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription =
                    description || data.site.siteMetadata.description;
                const canonicalUrl = path
                    ? `${data.site.siteMetadata.siteUrl}${path}`
                    : data.site.siteMetadata.siteUrl;
                return (
                    <Helmet
                        htmlAttributes={{
                            lang,
                        }}
                        title={title}
                        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                        meta={[
                            {
                                name: "description",
                                content: metaDescription,
                            },
                            {
                                property: "og:title",
                                content: title,
                            },
                            {
                                property: "og:url",
                                content: canonicalUrl,
                            },
                            {
                                property: "og:description",
                                content: metaDescription,
                            },
                            {
                                property: "og:type",
                                content: "website",
                            },
                            {
                                property: "fb:admins",
                                content: "1071761415",
                            },
                            {
                                name: "twitter:card",
                                content: "summary",
                            },
                            {
                                name: "twitter:site",
                                content: data.site.siteMetadata.authorHandle,
                            },
                            {
                                name: "twitter:creator",
                                content: data.site.siteMetadata.authorHandle,
                            },
                            {
                                name: "twitter:title",
                                content: title,
                            },
                            {
                                name: "twitter:description",
                                content: metaDescription,
                            },
                        ]
                            .concat(
                                keywords.length > 0
                                    ? {
                                          name: "keywords",
                                          content: keywords.join(", "),
                                      }
                                    : [],
                            )
                            .concat(meta)}
                    />
                );
            }}
        />
    );
}

SEO.defaultProps = {
    lang: "en",
    meta: [],
    keywords: [],
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                authorHandle
                title
                description
                author
                siteUrl
            }
        }
    }
`;
