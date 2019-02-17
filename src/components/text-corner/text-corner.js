import React from "react";
import PropTypes from "prop-types";

import styles from "./text-corner.module.scss";

const TextCorner = ({ children }) => {
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
