import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";
import TextCorner from "../components/text-corner/text-corner";

//JTM
// - responsive!!
// - use css instead js styles object
// - link styles

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={["gatsby", "application", "react"]} />
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: '-1' }}>
            <Image />
        </div>
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
                <h1 style={{ color: '#f0f0f0', fontSize: "5rem" }}>Hi!</h1>
                <h2 style={{ color: '#f0f0f0', fontSize: "3.3rem", margin: '2rem 0' }}>I'm Josh.</h2>
                <p style={{ color: '#f0f0f0', fontSize: "1.8rem", marginBottom: 0 }}>
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
