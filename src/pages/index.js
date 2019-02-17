import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TextCorner from "../components/text-corner/text-corner";

//JTM
// - responsive!!
// - use css instead js styles object

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={["gatsby", "application", "react"]} />
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
                <h1 style={{ fontSize: "5rem" }}>Hi!</h1>
                <h2 style={{ fontSize: "3.3rem", margin: '2rem 0' }}>I'm Josh.</h2>
                <p style={{ fontSize: "1.8rem", marginBottom: 0 }}>
                    I <Link to="/web">develop websites</Link> and
                    <br />
                    <Link to="/">make theater</Link>. Every now <br />
                    and then <Link to="/blog">I write something</Link> too.
                </p>
            </TextCorner>
        </div>
    </Layout>
);

export default IndexPage;
