import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

import styles from "./success.module.scss";

const SuccessPage = () => {
    return (
        <Layout contentClassName={styles.container}>
            <p>Thank you for your message! I'll get back to you when I can.</p>
            <Link to="/contact">Return to Contact Me</Link>
        </Layout>
    );
};

export default SuccessPage;
