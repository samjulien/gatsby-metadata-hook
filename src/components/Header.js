import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { title } = useSiteMetadata()

  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}
