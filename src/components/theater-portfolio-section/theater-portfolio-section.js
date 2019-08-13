import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import BasicImage from "../basic-image/basic-image";

import styles from "./theater-portfolio-section.module.scss";

const TheaterPortfolioSection = ({
    character,
    className,
    company,
    director,
    images,
    location,
    playwright,
    premiere,
    projectName,
    shouldReverse,
    quotes,
    venue,
}) => {
    const containerClasses = classnames(styles.itemContainer, className, {
        [styles.reversed]: shouldReverse,
    });
    const title = character ? `${projectName} (${character})` : projectName;
    const place =
        !company || company === venue
            ? `${venue} - ${location}`
            : `${company}, ${venue} - ${location}`;
    const bannerText = premiere ? `${premiere} Premiere` : null;

    return (
        <div className={containerClasses}>
            <div className={styles.imageSectionContainer}>
                <BasicImage
                    alt={`${projectName} photo`}
                    bannerClass={
                        shouldReverse ? styles.reversedBanner : undefined
                    }
                    bannerText={bannerText}
                    caption={images[0].caption}
                    childImageSharp={images[0].src.childImageSharp}
                    className={shouldReverse ? styles.reversedImage : undefined}
                    extension={images[0].src.extension}
                    publicURL={images[0].src.publicURL}
                />
            </div>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <h4>By {playwright}</h4>
                <h4>Directed By {director}</h4>
                <h4>{place}</h4>
                {quotes &&
                    quotes.map(({ author, citation, publication, text }) => (
                        <blockquote cite={citation} key={author}>
                            <p>
                                <a
                                    href={citation}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {text}
                                </a>
                            </p>
                            <footer>
                                <cite>
                                    {author}, {publication}
                                </cite>
                            </footer>
                        </blockquote>
                    ))}
            </div>
        </div>
    );
};

TheaterPortfolioSection.propTypes = {
    character: PropTypes.string,
    className: PropTypes.string,
    company: PropTypes.string,
    director: PropTypes.string,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            caption: PropTypes.string,
            src: PropTypes.shape({
                childImageSharp: PropTypes.object,
                extension: PropTypes.string,
                publicURL: PropTypes.string,
            }),
        }),
    ),
    location: PropTypes.string,
    playwright: PropTypes.string,
    premiere: PropTypes.string,
    projectName: PropTypes.string,
    shouldReverse: PropTypes.bool,
    quotes: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string,
            citation: PropTypes.string,
            publication: PropTypes.string,
            text: PropTypes.string,
        }),
    ),
    venue: PropTypes.string,
};

export default TheaterPortfolioSection;
