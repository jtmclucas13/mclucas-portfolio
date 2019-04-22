import React from "react";
import PropTypes from "prop-types";
import ReactBreakpoints from "react-breakpoints";
import * as breakpoints from "../styles/_breakpoints.scss";

import GlobalHeader from "./global-header/global-header";
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

const Layout = ({ children, shouldShowHeader }) => (
    <ReactBreakpoints
        breakpoints={numberedBreakpoints}
        debounceResize={true}
        debounceDelay={150}
    >
        {shouldShowHeader && <GlobalHeader />}
        <MainNav />
        <div className="cover">
            <main className="cover">{children}</main>
        </div>
    </ReactBreakpoints>
);

Layout.defaultProps = {
    shouldShowHeader: true,
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    shouldShowHeader: PropTypes.bool,
};

export default Layout;
