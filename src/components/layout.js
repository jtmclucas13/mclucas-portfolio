import React from "react";
import PropTypes from "prop-types";
import ReactBreakpoints from "react-breakpoints";
import * as breakpoints from "../styles/_breakpoints.scss";

import MainNav from "./main-nav/main-nav";
import "./layout.scss";

const numberedBreakpoints = Object.entries(breakpoints).reduce(
    (acc, [key, value]) => {
        return {
            ...acc,
            [key]: parseInt(value, 10),
        };
    },
    {},
);

const Layout = ({ children }) => (
    <ReactBreakpoints
        breakpoints={numberedBreakpoints}
        debounceResize={true}
        debounceDelay={150}
    >
        <MainNav />
        <div className="cover">
            <main className="cover">{children}</main>
        </div>
    </ReactBreakpoints>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
