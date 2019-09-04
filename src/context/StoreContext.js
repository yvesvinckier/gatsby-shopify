import React from "react"
import Client from "shopify-buy"

export const client = Client.buildClient({
    domain: "gatsby-blowup.myshopify.com",
    storefrontAccessToken: "93f664147035cd73ad2b1ff5b24a95ea",
})

export const StoreContext = React.createContext({
    client,
})