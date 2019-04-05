import React from "react";
import { withPrefix } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import styles from "./contact.module.scss";

//JTM link colors/styles
// - obfuscate email address and test formspree with it
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
                <label htmlFor="email">Email</label>
                <input id="email" required type="email" name="_replyto" />
                <label htmlFor="subject">Subject</label>
                <input id="subject" required type="text" name="__subject" />
                <label htmlFor="message">Message</label>
                <textarea id="message" required name="name" />
                <button type="submit">Send Email (After Captcha)</button>
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
