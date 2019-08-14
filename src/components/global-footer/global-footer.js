import React from "react";
import { Link } from "gatsby";

import styles from "./global-footer.module.scss";

const GlobalFooter = () => (
    <footer className={styles.footerContainer}>
        © {new Date().getFullYear()}, Joshua McLucas
        <Link to="/contact">Contact Me</Link>
    </footer>
);

export default GlobalFooter;
