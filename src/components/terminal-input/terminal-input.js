import React from "react";
import PropTypes from "prop-types";

import styles from "./terminal-input.module.scss";

const TerminalInput = React.forwardRef(
    ({ disabled, id, maxLength, name, onEnterKeyUp, type }, ref) => (
        <React.Fragment>
            <input
                className={styles.input}
                disabled={disabled}
                id={id}
                maxLength={maxLength}
                name={name}
                onKeyUp={e => (e.key === "Enter" ? onEnterKeyUp(e) : undefined)}
                ref={ref}
                type={type}
            />
        </React.Fragment>
    ),
);

TerminalInput.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    name: PropTypes.string,
    onEnterKeyUp: PropTypes.func,
    type: PropTypes.oneOf(["email", "text", "number", "password"]),
};

export default TerminalInput;