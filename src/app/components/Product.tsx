'use client'
import React, { useEffect } from 'react'

type TProduct = {
    id: number
    image_url: string
    title: string
    description: string
    price: number
}
type TGetProductsResponce = {
    anount: number;
    items: TProduct[];
    page: number;
    total: number;
}

const Products = () => {

    const getProducts = async () => {
        await fetch('http://o-complex.com:1337/products?page=1&page_size=20')
            .then((res): Promise<TGetProductsResponce> => res.json())
            .then(d => console.log(d))
    }

    useEffect(() => {
        getProducts()
    })
    return (
        <section>
            <div>Product</div>
        </section>
    )
}

export default Products