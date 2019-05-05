import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Terminal from "../components/terminal/terminal";

//JTM "Terminal" display
// - add links on the right side for explanation, everything else?
// - focus last input when clicked
// - useReducer instead of all the useState calls?

const WebPage = () => (
    <Layout>
        <SEO title="Web" keywords={["gatsby", "application", "react"]} />
        <Terminal />
    </Layout>
);

export default WebPage;
