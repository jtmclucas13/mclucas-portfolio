import React from "react";
import PropTypes from "prop-types";

import styles from "./terminal-input.module.scss";

const TerminalInput = ({ id, maxLength, name, type }) => (
    <React.Fragment>
        <input
            className={styles.input}
            id={id}
            maxLength={maxLength}
            name={name}
            type={type}
        />
    </React.Fragment>
);

TerminalInput.propTypes = {
    id: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.oneOf(["email", "text", "number", "password"]),
};

export default TerminalInput;
