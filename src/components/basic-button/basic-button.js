import React from "react";
import PropTypes from "prop-types";

import styles from "./basic-button.module.scss";

const BasicButton = ({ children, onClick, type }) => {
    return (
        <button className={styles.button} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

BasicButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["button", "reset", "submit"]),
};

export default BasicButton;
