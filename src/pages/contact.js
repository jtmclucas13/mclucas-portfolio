import React from "react";
import { withPrefix } from "gatsby";

import Layout from "../components/layout";
import BasicInput from "../components/basic-input/basic-input";
import BasicButton from "../components/basic-button/basic-button";
import BasicTextarea from "../components/basic-textarea/basic-textarea";
import SEO from "../components/seo";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import styles from "./contact.module.scss";

//JTM
// - header
// - use gatsby-source-filesystem for resume
const ContactPage = () => (
    <Layout>
        <SEO title="Contact Me" keywords={["gatsby", "application", "react"]} />
        <div className={styles.container}>
            <form
                className={styles.form}
                action="https://formspree.io/jtmclucas13@gmail.com"
                method="POST"
            >
                <h1>Drop me a line</h1>
                <BasicInput
                    id="email"
                    isRequired
                    label="Email"
                    name="_replyto"
                    type="email"
                />
                <BasicInput
                    id="subject"
                    isRequired
                    label="Subject"
                    name="__subject"
                />
                <BasicTextarea
                    id="message"
                    isRequired
                    label="Message"
                    name="name"
                />
                <BasicButton type="submit">
                    Send Email (After Captcha)
                </BasicButton>
            </form>
            <div className={styles.rightSide}>
                <h2>
                    <a href={withPrefix("McLucas-Resume-03-2019.pdf")} download>
                        Download my Resume
                    </a>
                </h2>
                <div className={styles.socialContainer}>
                    <a href="https://github.com/jtmclucas13">
                        <FaLinkedin className={styles.socialLogo} />
                    </a>
                    <a href="https://www.linkedin.com/in/joshuamclucas/">
                        <FaGithub className={styles.socialLogo} />
                    </a>
                </div>
            </div>
        </div>
    </Layout>
);

export default ContactPage;
