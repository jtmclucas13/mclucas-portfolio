import React from "react";

import Layout from "../components/layout";

import styles from "./404.module.scss";

const NotFoundPage = () => (
    <Layout contentClassName={styles.container}>
        <h1>Oh no, this page does not exist!</h1>
        <p>
            This page may not exist, but there are some cool ones that do! Use
            the navigation in the top right to visit whichever page your heart
            desires.
        </p>
    </Layout>
);

export default NotFoundPage;
