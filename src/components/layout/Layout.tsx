import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styles from "./layout.module.css";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

interface layoutProps {
  children: object;
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [currYOffset, setCurrYOffset] = useState<number>(0);
  const [navState, setNavState] = useState<string>("transparent");
  const [menuIconActive, setMenuIconActive] = useState<boolean>(false);

  useEffect(() => {
    window.onscroll = e => {
      const yOffset: number = e.path[1].pageYOffset;
      if (yOffset < currYOffset) setNavState("showing");
      if (yOffset > currYOffset && yOffset > 100) {
        setNavState("hidden");
        setMenuIconActive(false);
      }
      if (yOffset === 0) setNavState("transparent");
      setCurrYOffset(yOffset);
    };

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div>
      {windowDimensions.width > 700 ? (
        <>
          {navState !== "hidden" ? (
            <div className={`${styles.navBar} ${styles[navState]}`}>
              <Link className={styles.logoContainer} to="#hero">
                <h1 className={styles.logo}>T.P.G.</h1>
                <h6 className={styles.subLogo}>Toll Plastic Grinding</h6>
              </Link>
              <div className={styles.linksContainer}>
                <Link className={styles.navLink} to="#about">
                  About
                </Link>
                <Link className={styles.navLink} to="#services">
                  Services
                </Link>
                <Link className={styles.navLink} to="#gallery">
                  Gallery
                </Link>
                <Link className={styles.navLink} to="#contact">
                  Contact
                </Link>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <>
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

              <div
                className={
                  menuIconActive === false
                    ? styles.sidenav
                    : `${styles.sidenav} ${styles.active}`
                }
              >
                <Link to="#about">About</Link>
                <Link to="#services">Services</Link>
                <Link to="#gallery">Gallery</Link>
                <Link to="#contact">Contact</Link>
              </div>
            </div>
          ) : null}
        </>
      )}
      <div>{children}</div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Layout;
