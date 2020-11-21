import React, { useState } from "react";
import { PageProps } from "gatsby";
import { RiRecycleLine } from "react-icons/ri";
import styles from "./layout.module.css";

const Layout: React.FC = ({ children }: PageProps) => {
  let [currYOffset, setCurrYOffset] = useState<number>(0);
  let [scrolledUp, setScrolledUp] = useState<boolean>(false);
  let [menuIconActive, setMenuIconActive] = useState<boolean>(false);

  window.onscroll = e => {
    const yOffset: number = e.path[1].pageYOffset;
    if (yOffset < currYOffset) setScrolledUp(true);
    else setScrolledUp(false);
    setCurrYOffset(yOffset);
  };

  return (
    <div>
      <div
        className={
          scrolledUp ? `${styles.navBar} ${styles.scroll}` : styles.navBar
        }
      >
        {/* <RiRecycleLine style={{ width: 100, height: 60, color: "white" }} /> */}
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
