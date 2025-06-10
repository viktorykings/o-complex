"use client"
import { useState, useRef, useEffect } from "react";
import styles from './product.module.css'

const ProductCounter = () => {
    const [isBuying, setIsBuying] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isBuying && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isBuying]);

    const handleBuyClick = () => {
        setIsBuying(true);
    };

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numValue = value.replace(/[^0-9]/g, '');
        setQuantity(numValue ? Math.max(1, parseInt(numValue, 10)) : 1);
    };

    const handleBlur = () => {
        if (quantity < 1) setQuantity(1);
    };

    return (
        <div className={styles["product-counter"]}>
            {!isBuying ? (
                <button
                    className={styles.btn}
                    onClick={handleBuyClick}
                >
                    Купить
                </button>
            ) : (
                <div className={styles["quantity-controls"]}>
                    <button
                        className={styles["quantity-button"]}
                        onClick={handleDecrement}
                        aria-label="Уменьшить количество"
                    >
                        -
                    </button>
                    <input
                        ref={inputRef}
                        type="text"
                        className={styles["quantity-input"]}
                        value={quantity}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputMode="numeric"
                        pattern="[0-9]*"
                    />
                    <button
                        className={styles["quantity-button"]}
                        onClick={handleIncrement}
                        aria-label="Увеличить количество"
                    >
                        +
                    </button>
                </div>
            )}
        </div>
    );
};
export default ProductCounter