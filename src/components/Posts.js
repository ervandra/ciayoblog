/**
 * Projects component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query wordpressPostQuery {
      allWordpressPost{edges{node{
        id,
        title,
        excerpt,
        slug
      }}}
    }
  `)

  if (data && data.allWordpressPost && data.allWordpressPost.edges.length > 0) {
    return (
      <>
        {data.allWordpressPost.edges.map(post => (
          <div>
            <p><Link to={`/post/${post.node.slug}`}>{post.node.title}</Link></p>
          </div>
        ))}
      </>
    )
  }

  return (
    <>ed
      <p>Posts</p>
    </>
  )
}


export default Posts
