import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            year
            author {
              name
            }
          }
        }
      }
    `
  )

  return (
    <div className="footer-text">
      &copy; {data.site.siteMetadata.year} {data.site.siteMetadata.author.name}
    </div>
  )
}
