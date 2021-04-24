import React from "react"
import Footer from "./Footer"
import Navbar from "./navbar"

const Layouts = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layouts
