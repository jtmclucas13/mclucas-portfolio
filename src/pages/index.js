import React from "react";
import { Link } from "gatsby";

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
            <p className={styles.heroBody}>
                I make{" "}
                <Link className="light" to="/web">
                    websites
                </Link>{" "}
                and{" "}
                <Link className="light" to="/">
                    theater
                </Link>
                .<br /> Every now and then{" "}
                <Link className="light" to="/blog">
                    I write
                </Link>{" "}
                too.
            </p>
        </div>
    </Layout>
);

export default IndexPage;
