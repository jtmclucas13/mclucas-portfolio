import React from "react";
import { Link } from "gatsby";
import { Media } from "react-breakpoints";
import className from "classnames";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";

import styles from "./index.module.scss";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={["gatsby", "application", "react"]} />
        <div className={styles.heroImageContainer}>
            <Image className={styles.heroImage} />
        </div>
        <div className={styles.heroTextContainer}>
            <div className={styles.headerContainer}>
                <h1 className={styles.heroHeader}>Hi!</h1>
                <h2 className={styles.heroSubheader}>My name's Josh.</h2>
            </div>
            <Media>
                {({ breakpoints, currentBreakpoint }) => (
                    <p className={styles.heroBody}>
                        I make{" "}
                        <Link
                            className={className({
                                light:
                                    breakpoints[currentBreakpoint] >=
                                    breakpoints.small,
                                inverted:
                                    breakpoints[currentBreakpoint] <
                                    breakpoints.small,
                            })}
                            to="/web"
                        >
                            websites
                        </Link>{" "}
                        and{" "}
                        <Link
                            className={className({
                                light:
                                    breakpoints[currentBreakpoint] >=
                                    breakpoints.small,
                                inverted:
                                    breakpoints[currentBreakpoint] <
                                    breakpoints.small,
                            })}
                            to="/"
                        >
                            theater
                        </Link>
                        .<br /> Every now and then{" "}
                        <Link
                            className={className({
                                light:
                                    breakpoints[currentBreakpoint] >=
                                    breakpoints.small,
                                inverted:
                                    breakpoints[currentBreakpoint] <
                                    breakpoints.small,
                            })}
                            to="/blog"
                        >
                            I write
                        </Link>{" "}
                        too.
                    </p>
                )}
            </Media>
        </div>
    </Layout>
);

export default IndexPage;
