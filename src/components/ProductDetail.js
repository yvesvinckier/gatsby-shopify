import React from 'react'
import Img from 'gatsby-image'

const ProductDetail = ({ product }) => {
    return (
        <div>
            <h1>{product.title}</h1>
            <Img fixed={product.images[0].localFile.childImageSharp.fixed} />
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDetail
