import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import GlobalHeader from "./global-header/global-header";
import GlobalFooter from "./global-footer/global-footer";
import MainNav from "./main-nav/main-nav";
import "./layout.scss";

const Layout = ({
    children,
    contentClassName,
    shouldShowFooter,
    shouldShowHeader,
}) => (
    <div id="layout-wrapper">
        {shouldShowHeader && <GlobalHeader />}
        <MainNav />
        <div className="cover">
            <main className={classnames("cover", contentClassName)}>
                {children}
            </main>
        </div>
        {shouldShowFooter && <GlobalFooter />}
    </div>
);

Layout.defaultProps = {
    shouldShowFooter: true,
    shouldShowHeader: true,
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    contentClassName: PropTypes.string,
    shouldShowFooter: PropTypes.bool,
    shouldShowHeader: PropTypes.bool,
};

export default Layout;
