import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
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

const Layout = ({ children, contentClassName, shouldShowHeader }) => (
    <ReactBreakpoints
        breakpoints={numberedBreakpoints}
        debounceResize={true}
        debounceDelay={150}
    >
        {shouldShowHeader && <GlobalHeader />}
        <MainNav />
        <div className="cover">
            <main className={classnames("cover", contentClassName)}>
                {children}
            </main>
        </div>
    </ReactBreakpoints>
);

Layout.defaultProps = {
    shouldShowHeader: true,
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    contentClassName: PropTypes.string,
    shouldShowHeader: PropTypes.bool,
};

export default Layout;
