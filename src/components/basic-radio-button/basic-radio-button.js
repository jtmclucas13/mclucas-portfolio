import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./basic-radio-button.module.scss";

const BasicRadioButton = ({
    checked,
    className,
    id,
    label,
    name,
    onChange,
}) => (
    <div className={classNames(styles.inputContainer, className)}>
        <label htmlFor={id}>
            {label}
            <input
                checked={checked}
                id={id}
                name={name}
                onChange={onChange}
                type="radio"
            />
            <span className={styles.radioButton} />
        </label>
    </div>
);

BasicRadioButton.propTypes = {
    checked: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
};

export default BasicRadioButton;
