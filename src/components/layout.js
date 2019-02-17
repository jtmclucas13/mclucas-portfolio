import React from "react";
import PropTypes from "prop-types";

import MainNav from "./main-nav/main-nav";
import "./layout.css";

const Layout = ({ children }) => (
    <>
        <MainNav />
        <div
            style={{
                margin: "0 auto",
                maxWidth: 960,
                padding: "0px 1.0875rem 1.45rem",
                paddingTop: 0,
            }}
        >
            <main>{children}</main>
        </div>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
