import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Terminal from "../components/terminal/terminal";

import styles from "./web.module.scss";

const WebPage = () => (
    <Layout contentClassName={styles.container}>
        <SEO title="Web" keywords={["gatsby", "application", "react"]} />
        <Terminal className={styles.terminalContainer} />
        <div className={styles.textContainer}>
            <h1>
                {new Date().getFullYear() - 2013}+ years of crafting the web
            </h1>
            <h2>(Use the terminal if you're feeling frisky)</h2>
            <p>
                I began my software journey as a teenager, reminiscing about a
                childhood passion for video games. In the depths of a frigid
                winter break, I decided to take an online JavaScript class,
                igniting a passion that would sustain my software development
                career.
            </p>
            <p>
                Proudly self-taught, I have worked in a variety of fields,
                including cybersecurity, digital forensics, consumer fashion,
                and blockchain-powered adtech. A mentor at heart, I have led
                teams large and small as well as owned projects as a solo
                developer.
            </p>
            <p>
                For more details on my work history and past clients, check out{" "}
                <Link to="/web/portfolio">my portfolio</Link>.
            </p>
        </div>
    </Layout>
);

export default WebPage;
