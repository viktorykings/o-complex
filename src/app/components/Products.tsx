'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './product.module.css'

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
    const [products, setProducts] = useState<TProduct[]>([])

    const getProducts = async () => {
        await fetch('http://o-complex.com:1337/products?page=1&page_size=20')
            .then((res): Promise<TGetProductsResponce> => res.json())
            .then(d => {
                setProducts(d.items)
                console.log(d)
            })
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <section className={styles.products}>
            {products && products.map(p => {

                return <div key={p.id} className={styles.product}>
                    <Image src={p.image_url} alt='Oops...Failed to load' width={390} height={390} />
                    <h3 className={styles.title}>{p.title}</h3>
                    <p className={styles.description}>{p.description}</p>
                    <p className={styles.price}>{p.price}$</p>
                    <button className={styles.btn}>Купить</button>
                </div>
            })}
        </section>
    )
}

export default Products