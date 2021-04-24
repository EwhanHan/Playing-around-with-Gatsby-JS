import React from "react"
import { Link } from "gatsby"
import * as styles from "./navbar.module.css"

const navbar = () => {
  return (
    <header>
      <ul className={styles.navbarContainer}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </header>
  )
}

export default navbar
