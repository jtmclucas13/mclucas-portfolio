import React from "react";
import PropTypes from "prop-types";

import MainNav from "./main-nav/main-nav";
import "./layout.css";

const Layout = ({ children }) => (
    <>
        <MainNav />
        <div>
            <main>{children}</main>
        </div>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
