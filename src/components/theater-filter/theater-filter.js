import React from "react";
import PropTypes from "prop-types";

import BasicRadioButton from "../basic-radio-button/basic-radio-button";

import styles from "./theater-filter.module.scss";

const TheaterFilter = ({ activeFilter, onFilterChange }) => (
    <div className={styles.container}>
        <BasicRadioButton
            checked={activeFilter === "ALL"}
            className={styles.radioButton}
            id="all"
            label="All"
            name="theaterFilter"
            onChange={() => onFilterChange("ALL")}
        />
        <BasicRadioButton
            checked={activeFilter === "ACTING"}
            className={styles.radioButton}
            id="acting"
            label="Acting"
            name="theaterFilter"
            onChange={() => onFilterChange("ACTING")}
        />
        <BasicRadioButton
            checked={activeFilter === "DIRECTING"}
            className={styles.radioButton}
            id="directing"
            label="Directing"
            name="theaterFilter"
            onChange={() => onFilterChange("DIRECTING")}
        />
    </div>
);

TheaterFilter.propTypes = {
    activeFilter: PropTypes.oneOf(["ALL", "ACTING", "DIRECTING"]),
    onFilterChange: PropTypes.func,
};

export default TheaterFilter;
