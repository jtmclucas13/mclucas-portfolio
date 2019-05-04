import React from "react";
import PropTypes from "prop-types";

import styles from "./terminal-input.module.scss";

const TerminalInput = React.forwardRef(({ id, maxLength, name, type }, ref) => (
    <React.Fragment>
        <input
            className={styles.input}
            id={id}
            maxLength={maxLength}
            name={name}
            ref={ref}
            type={type}
        />
    </React.Fragment>
));

TerminalInput.propTypes = {
    id: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.oneOf(["email", "text", "number", "password"]),
};

export default TerminalInput;
