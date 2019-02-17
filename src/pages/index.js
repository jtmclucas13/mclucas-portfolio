import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";
import TextCorner from "../components/text-corner/text-corner";

import styles from "./index.module.scss";

//JTM
// - responsive!!

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={["gatsby", "application", "react"]} />
        <div className={styles.heroImageContainer}>
            <Image className={styles.heroImage} />
        </div>
        <div
            style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                width: "100%",
                height: "80%",
            }}
        >
            <TextCorner>
                <h1 className={styles.heroHeader}>Hi!</h1>
                <h2 className={styles.heroSubheader}>I'm Josh.</h2>
                <p className={styles.heroBody}>
                    I{" "}
                    <Link className="light" to="/web">
                        develop websites
                    </Link>{" "}
                    and
                    <br />
                    <Link className="light" to="/">
                        make theater
                    </Link>
                    . Every now <br />
                    and then{" "}
                    <Link className="light" to="/blog">
                        I write something
                    </Link>{" "}
                    too.
                </p>
            </TextCorner>
        </div>
    </Layout>
);

export default IndexPage;
