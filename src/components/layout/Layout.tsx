import React, { useState } from "react";
import { PageProps } from "gatsby";
import { RiRecycleLine } from "react-icons/ri";
import styles from "./layout.module.css";

const Layout: React.FC = ({ children }: PageProps) => {
  let [currYOffset, setCurrYOffset] = useState(0);
  let [navState, setNavState] = useState("transparent");
  let [menuIconActive, setMenuIconActive] = useState<boolean>(false);

  // navbar can be
  // - transparent yOff = 0
  // - hidden
  // - showing scrolledUp = true

  window.onscroll = e => {
    const yOffset: number = e.path[1].pageYOffset;

    if (yOffset < currYOffset) setNavState("showing");
    if (yOffset > currYOffset) setNavState("hidden");
    if (yOffset === 0) setNavState("transparent");

    setCurrYOffset(yOffset);
  };

  return (
    <div>
      {navState !== "hidden" ? (
        <div className={`${styles.navBar} ${styles[navState]}`}>
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
      ) : null}
      <div>{children}</div>
      <div>
        <h6>footer</h6>
      </div>
    </div>
  );
};

export default Layout;
