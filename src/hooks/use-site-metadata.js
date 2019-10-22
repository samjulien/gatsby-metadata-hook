import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
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

  return site.siteMetadata
}
