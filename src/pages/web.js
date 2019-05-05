import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Terminal from "../components/terminal/terminal";

//JTM "Terminal" display
// - add links on the right side for explanation, everything else?

const WebPage = () => (
    <Layout>
        <SEO title="Web" keywords={["gatsby", "application", "react"]} />
        <Terminal />
    </Layout>
);

export default WebPage;
