import React from "react"
import Header from "../components/Header"
import Footer from "./Footer"
import NavBar from "./NavBar"

export default ({ children, noHeader }) => {
  return (
    <>
      <div className="container">
        <Header />
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  )
}
