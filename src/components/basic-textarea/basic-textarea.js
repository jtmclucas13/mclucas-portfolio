import React from "react";
import PropTypes from "prop-types";

import styles from "./basic-textarea.module.scss";

const BasicTextarea = ({ id, isRequired, label, name }) => (
    <React.Fragment>
        {label && <label htmlFor={id}>{label}</label>}
        <textarea
            className={styles.textarea}
            id={id}
            required={isRequired}
            name={name}
        />
    </React.Fragment>
);

BasicTextarea.propTypes = {
    id: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
};

export default BasicTextarea;
