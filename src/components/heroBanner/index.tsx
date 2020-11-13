import React from "react"
import styles from "./heroBanner.module.css"
import Img, { FluidObject } from "gatsby-image"

interface heroProps {
  fluid: FluidObject
}

const HeroBanner: React.FC<heroProps> = ({ fluid }) => {
  return (
    <div className={styles.container}>
      <Img fluid={fluid} alt="processed plastic" />
      <div className={styles.textContainer}>
        <h1>Plastic Grinding, Shredding & Pelletizing Services</h1>
        <h2>
          We have over 20 years of experience shredding, grinding, and
          pelletizing plastic.
        </h2>
      </div>
    </div>
  )
}

export default HeroBanner
