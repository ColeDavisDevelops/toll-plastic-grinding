import React from "react"
import { PageProps } from "gatsby"
import Img from "gatsby-image"
import styles from "./layout.module.css"

const Layout: React.FC = ({ children }: PageProps) => {
  return (
    <>
      <div className={styles.navBar}>
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
