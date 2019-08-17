import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import BasicInput from "../components/basic-input/basic-input";
import BasicButton from "../components/basic-button/basic-button";
import BasicTextarea from "../components/basic-textarea/basic-textarea";
import SEO from "../components/seo";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import styles from "./contact.module.scss";

const ResumeQuery = graphql`
    {
        file(name: { eq: "Resume" }) {
            publicURL
        }
    }
`;

const ContactPage = ({ location }) => {
    const data = useStaticQuery(ResumeQuery);
    return (
        <Layout>
            <SEO
                description="Use this page to hire me, to suggest topics for my blog, or just to say hello."
                path={location.pathname}
                title="Contact Me"
            />
            <div className={styles.container}>
                <form
                    className={styles.form}
                    data-netlify="true"
                    data-netlify-recaptcha="true"
                    name="contact"
                    action="/pages/success"
                    method="POST"
                >
                    <h2>Drop me a line</h2>
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
                    <div data-netlify-recaptcha="true"></div>
                    <BasicButton type="submit">Send Email</BasicButton>
                </form>
                <div className={styles.rightSide}>
                    <h2>
                        <a href={data.file.publicURL} download>
                            Download my Resume
                        </a>
                    </h2>
                    <div className={styles.socialContainer}>
                        <a
                            href="https://github.com/jtmclucas13"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className={styles.socialLogo} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/joshuamclucas/"
                            aria-label="GitHub"
                        >
                            <FaGithub className={styles.socialLogo} />
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactPage;
