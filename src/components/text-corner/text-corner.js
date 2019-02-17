import React from "react";
import PropTypes from "prop-types";

import styles from "./text-corner.module.scss";

const TextCorner = ({ children }) => {
    //JTM pass in? what about resizes?

    return (
        <div className={styles.container}>
            <span className={styles.cornerText}>{children}</span>
        </div>
    );
};

TextCorner.propTypes = {
    children: PropTypes.node,
};

export default TextCorner;
