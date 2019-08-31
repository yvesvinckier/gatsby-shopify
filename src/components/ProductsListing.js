import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Product from "./Product"

const PRODUCTS_LISTINGS_QUERY = graphql`
query ProductsListingQuery {
  allShopifyProduct {
    edges {
      node {
        id
        title
        images {
          localFile {
            childImageSharp {
              fixed (width:400) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
        publishedAt(formatString: "YYYY")
        description
        descriptionHtml
        variants {
          sku
          id
          title
          price
        }
      }
    }
  }
}
`

const ProductsListing = () => {
    const { allShopifyProduct } = useStaticQuery(PRODUCTS_LISTINGS_QUERY)
    console.log("allShopifyProduct", allShopifyProduct)
    return (
        <div>
            {allShopifyProduct.edges.map(edge => (
                <Product product={edge.node} key={edge.node.id} />
            ))}
        </div>
    )
}

export default ProductsListing

