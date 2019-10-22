import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <Link className="nav-link" to="/">
      Home
    </Link>{" "}
    |{" "}
    <Link className="nav-link" to="/about">
      About
    </Link>
  </div>
)
