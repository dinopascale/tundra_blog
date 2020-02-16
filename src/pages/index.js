import React from "react"
import { graphql, Link } from "gatsby"

export default ({data}) => {
    const {allMarkdownRemark: {edges} } = data;
    return (
        <ul>
            {
                edges.map(({node}) => 
                <li key={node.id}>
                    <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
                </li>)
            }
        </ul>
    )
}

export const homePageQuery = graphql`
    {
        allMarkdownRemark {
            edges {
                node {
                    id
                    excerpt
                    frontmatter {
                        date
                        path
                        title
                    }
                }
            }
        }
    }
`