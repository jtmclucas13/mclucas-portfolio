import React from "react";
import PropTypes from "prop-types";

import BasicButton from "../basic-button/basic-button";

import styles from "./banner-cta.module.scss";

const BannerCta = ({ bannerText, buttonText, onButtonClick }) => (
    <div className={styles.container}>
        <span className={styles.textContainer}>{bannerText}</span>
        <BasicButton onClick={onButtonClick}>{buttonText}</BasicButton>
    </div>
);

BannerCta.propTypes = {
    bannerText: PropTypes.string,
    buttonText: PropTypes.string,
    onButtonClick: PropTypes.func,
};

export default BannerCta;
