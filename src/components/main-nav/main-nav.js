import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { useStaticQuery, Link, graphql } from "gatsby";
import classnames from "classnames";

import styles from "./main-nav.module.scss";
import { grey50, purple50 } from "../../styles/_colors.module.scss";

const NavLinksQuery = graphql`
    query NavLinksQuery {
        site {
            siteMetadata {
                menuLinks {
                    name
                    link
                }
            }
        }
    }
`;

const MainNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHamburgerFocused, setIsHamburgerFocused] = useState(false);
    const data = useStaticQuery(NavLinksQuery);

    function toggleIsOpen() {
        setIsOpen(!isOpen);
    }

    function handleKeyDown(e) {
        const spaceKey = 32;
        const enterKey = 13;
        const keyPressed = e.keyCode;
        const toggleKeys = [spaceKey, enterKey];
        if (toggleKeys.includes(keyPressed)) {
            setIsOpen(!isOpen);
        }
    }

    return (
        <div className={classnames({ [styles.isOpen]: isOpen })}>
            <div className={styles.overlay} onClick={toggleIsOpen} />
            <span
                className={styles.hamburger}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsHamburgerFocused(true)}
                onBlur={() => setIsHamburgerFocused(false)}
                tabIndex={0}
            >
                <HamburgerMenu
                    isOpen={isOpen}
                    menuClicked={toggleIsOpen}
                    color={isOpen ? grey50 : purple50}
                    strokeWidth={isHamburgerFocused ? 4 : undefined}
                />
            </span>
            <div className={styles.slideout}>
                <div className={styles.navContainer}>
                    <nav>
                        <ul>
                            {data.site.siteMetadata.menuLinks.map(link => (
                                <li key={link.link}>
                                    <Link
                                        activeClassName={styles.activeLink}
                                        className={styles.link}
                                        to={link.link}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <footer className={styles.navFooter}>
                    © {new Date().getFullYear()}, Joshua McLucas
                </footer>
            </div>
        </div>
    );
};

export default MainNav;
