"use client"
import { useInfiniteScroll } from '@/app/hooks/useInfiniteScroll';
import { TGetProductsResponce, TProduct } from '@/app/types/TProduct';
import { useState } from 'react';
import Product from './Product';
import styles from './product.module.css'

const BASE_URL = 'http://o-complex.com:1337/products'

export const InfiniteScrollList = () => {
    const [items, setItems] = useState<TProduct[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loadMore = async () => {
        if (!hasMore || isLoading) return;

        setIsLoading(true);


        const newItems = await fetch(`${BASE_URL}?page=${page}&page_size=20`).then(res => res.json()).then((data: TGetProductsResponce) => data.items);
        if (newItems.length === 0) {
            setHasMore(false);
        } else {
            setItems(prev => [...prev, ...newItems]);
            setPage(prev => prev + 1);
        }

        setIsLoading(false);
    };

    const observerRef = useInfiniteScroll(loadMore, hasMore);

    return (
        <section className={styles.products}>
            {
                items.map((item) => (
                    <Product key={item.id} product={item} />
                ))
            }
            <div ref={observerRef} className="loader">
                {isLoading && 'Загрузка...'}
            </div>
        </section >
    );
};