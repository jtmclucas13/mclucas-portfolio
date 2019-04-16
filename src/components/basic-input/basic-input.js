import React from "react";
import PropTypes from "prop-types";

import styles from "./basic-input.module.scss";

const BasicInput = ({ id, isRequired, label, name, type }) => (
    <React.Fragment>
        {label && <label htmlFor={id}>{label}</label>}
        <input
            className={styles.input}
            id={id}
            required={isRequired}
            type={type}
            name={name}
        />
    </React.Fragment>
);

BasicInput.propTypes = {
    id: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(["email", "text", "number", "password"]),
};

export default BasicInput;
