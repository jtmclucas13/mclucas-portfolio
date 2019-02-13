import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "gatsby";
import classnames from "classnames";

import styles from "./main-nav.module.scss";
import { grey50 } from "../../styles/_colors.scss";

//JTM
// - responsiveize
// - put strings in config somewhere
// - get links from graphql?
const MainNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleIsOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={classnames({ [styles.isOpen]: isOpen })}>
            <div className={styles.overlay} onClick={toggleIsOpen} />
            <div className={styles.slideout}>
                <div className={styles.navContainer}>
                    <nav>
                        <ul>
                            <li>
                                <Link
                                    activeClassName={styles.activeLink}
                                    className={styles.link}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClassName={styles.activeLink}
                                    className={styles.link}
                                    to="/web"
                                >
                                    Web
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <span className={styles.hamburger}>
                <HamburgerMenu
                    isOpen={isOpen}
                    menuClicked={toggleIsOpen}
                    color={grey50}
                />
            </span>
        </div>
    );
};

export default MainNav;
