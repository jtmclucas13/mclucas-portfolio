import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styles from "./contact.module.scss";

//JTM set up 100% width/height and bg colors
const ContactPage = () => (
    <Layout>
        <SEO title="Contact Me" keywords={["gatsby", "application", "react"]} />
        <div className={styles.container}>
            <h1>Email Me</h1>
            <h2>Download my Resume</h2>
            <div>
                <h2>LinkedIn Icon</h2>
                <h2>GitHub Icon</h2>
            </div>
        </div>
    </Layout>
);

export default ContactPage;
