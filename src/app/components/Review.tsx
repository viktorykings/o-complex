"use client"
import DOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react'
import styles from "./review.module.css";

type TReview = {
    id: number;
    text: string
}

const Review = () => {
    const [reviews, setReviews] = useState<TReview[]>([])

    const sanitizeHtml = (html: string) => ({
        __html: DOMPurify.sanitize(html),
    });
    const getReviews = async () => {
        await fetch('http://o-complex.com:1337/reviews')
            .then(res => res.json())
            .then(d => {
                setReviews(d); console.log(d)
            })
    }

    useEffect(() => {
        getReviews()
    }, [])
    return (
        <section>
            {reviews && reviews.map(r => {
                return <div key={r.id} className={styles.review} dangerouslySetInnerHTML={sanitizeHtml(r.text)} ></div>
            }
            )}
        </section>
    )
}

export default Review