import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { useStaticQuery, Link, graphql } from "gatsby";
import classnames from "classnames";

import strings from "../../static/strings.json";
import styles from "./main-nav.module.scss";
import { grey50 } from "../../styles/_colors.scss";

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
    const data = useStaticQuery(NavLinksQuery);

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
                            {data.site.siteMetadata.menuLinks.map(link => (
                                <li>
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
                    © {new Date().getFullYear()}, {strings.me.fullName}
                </footer>
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
