import React, { useEffect, useState } from "react";
import { PageProps, Link } from "gatsby";
import { RiRecycleLine } from "react-icons/ri";
import styles from "./layout.module.css";

const Layout: React.FC = ({ children }: PageProps) => {
  let [currYOffset, setCurrYOffset] = useState<number>(0);
  let [navState, setNavState] = useState<string>("transparent");
  let [menuIconActive, setMenuIconActive] = useState<boolean>(false);

  useEffect(() => {
    window.onscroll = e => {
      const yOffset: number = e.path[1].pageYOffset;

      if (yOffset < currYOffset) setNavState("showing");
      if (yOffset > currYOffset) {
        setNavState("hidden");
        setMenuIconActive(false);
      }
      if (yOffset === 0) setNavState("transparent");

      setCurrYOffset(yOffset);
    };
  });

  return (
    <div>
      {navState !== "hidden" ? (
        <div className={`${styles.navBar} ${styles[navState]}`}>
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
            <Link to="about">About</Link>
            <Link to="services">Services</Link>
            <Link to="#gallery">Gallery</Link>
            <Link to="contact">Contact</Link>
          </div>
        </div>
      ) : null}
      <div>{children}</div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Layout;
