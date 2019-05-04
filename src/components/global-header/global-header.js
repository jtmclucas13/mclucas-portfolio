import React from "react";
import { Link } from "gatsby";

import styles from "./global-header.module.scss";

const GlobalHeader = () => (
    <header className={styles.headerContainer}>
        <h1>
            <Link className="noUnderline" to="/">
                Joshua McLucas
            </Link>
        </h1>
    </header>
);

export default GlobalHeader;
