'use client'
import React from 'react'
import Image, { ImageLoaderProps } from 'next/image'
import styles from './product.module.css'
import { TProduct } from '@/app/types/TProduct'
import ProductCounter from './ProductCounter'

type ProductProp = {
    product: TProduct
}
const svgLoader = ({ src, width, quality }: ImageLoaderProps): string => {
    return `${src}${src.includes('?') ? '&' : '?'}w=${width}&q=${quality || 75}`;
};

const Product = ({ product }: ProductProp) => {
    return <div key={product.id} className={styles.product}>
        <Image loader={svgLoader} src={product.image_url} alt='Oops...Failed to load' width={390} height={390} priority={false} />
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>{product.price}$</p>
        <ProductCounter />
    </div>
}

export default Product