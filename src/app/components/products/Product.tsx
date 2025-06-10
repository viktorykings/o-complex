'use client'
import React from 'react'
import Image from 'next/image'
import styles from './product.module.css'
import { TProduct } from '@/app/types/TProduct'

type ProductProp = {
    product: TProduct
}


const Product = ({ product }: ProductProp) => {
    return <div key={product.id} className={styles.product}>
        <Image src={product.image_url} alt='Oops...Failed to load' width={390} height={390} />
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>{product.price}$</p>
        <button className={styles.btn}>Купить</button>
    </div>
}



export default Product