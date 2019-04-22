import React from "react";
import { Link } from "gatsby";

import styles from "./global-header.module.scss";

const GlobalHeader = () => (
    <header class={styles.headerContainer}>
        <Link class="noUnderline" to="/">
            <h1>Joshua McLucas</h1>
        </Link>
    </header>
);

export default GlobalHeader;
