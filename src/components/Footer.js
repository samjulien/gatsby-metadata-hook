import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { year, author } = useSiteMetadata()

  return (
    <div className="footer-text">
      &copy; {year} {author.name}
    </div>
  )
}
