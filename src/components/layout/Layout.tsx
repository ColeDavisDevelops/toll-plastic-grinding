import React, { useState } from "react";
import { PageProps } from "gatsby";
import styles from "./layout.module.css";

const Layout: React.FC = ({ children }: PageProps) => {
  let [isScrolled, setIsScrolled] = useState(false);
  let [menuIconActive, setMenuIconActive] = useState(false);

  window.onscroll = e => {
    if (e.path[1].pageYOffset !== 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div>
      <div
        className={
          isScrolled ? `${styles.navBar} ${styles.scroll}` : styles.navBar
        }
      >
        {/* menu icon */}
        <div
          className={menuIconActive === false ? null : styles.open}
          id={styles.menuIcon}
          onClick={() => setMenuIconActive(!menuIconActive)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* menu */}
        <div
          className={
            menuIconActive === false
              ? styles.sidenav
              : `${styles.sidenav} ${styles.active}`
          }
        >
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
