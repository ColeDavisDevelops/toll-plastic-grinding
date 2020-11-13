import React, { useState } from "react"
import { PageProps } from "gatsby"
import styles from "./layout.module.css"

const Layout: React.FC = ({ children }: PageProps) => {
  let [navStyleOverride, setNavStyleOverride] = useState({
    backgroundColor: "transparent",
    opacity: 1,
  })

  window.onscroll = e => {
    if (e.path[1].pageYOffset !== 0) {
      setNavStyleOverride({
        backgroundColor: "black",
        opacity: 0.5,
      })
    } else {
      setNavStyleOverride({
        backgroundColor: "transparent",
        opacity: 1,
      })
    }
  }

  return (
    <>
      <div className={styles.navBar} style={navStyleOverride}>
        <h1 className={styles.logo}>Toll Plastic Grinding</h1>
        <h2 className={styles.navItem}>Blog</h2>
        <h2 className={styles.navItem}>Contact Us</h2>
        <h2 className={styles.navItem}>About</h2>
      </div>
      <div>{children}</div>
    </>
  )
}

export default Layout
