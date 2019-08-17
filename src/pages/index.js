import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";

import styles from "./index.module.scss";

const IndexPage = () => (
    <Layout shouldShowFooter={false} shouldShowHeader={false}>
        <SEO title="Home" />
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
                <Link className={styles.heroTextLink} to="/web">
                    websites
                </Link>{" "}
                and{" "}
                <Link className={styles.heroTextLink} to="/theater-portfolio">
                    theater
                </Link>
                .<br /> Every now and then{" "}
                <Link className={styles.heroTextLink} to="/blog">
                    I write
                </Link>{" "}
                too.
            </p>
        </div>
    </Layout>
);

export default IndexPage;
