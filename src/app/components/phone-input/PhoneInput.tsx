"use client"
import { useState, useEffect, useRef, ChangeEvent } from 'react';
import styles from './phone-input.module.css'

const PhoneInput = () => {
    const [phone, setPhone] = useState<string>('+7 (');
    const inputRef = useRef<HTMLInputElement>(null);

    const formatPhone = (input: string): string => {
        const cleaned = input.replace(/\D/g, '');

        // Убираем лишние цифры (если вдруг ввели больше 11)
        const digits = cleaned.slice(0, 11);

        let formatted = '+7';

        if (digits.length > 1) {
            formatted += ` (${digits.slice(1, 4)}`;
        }
        if (digits.length > 4) {
            formatted += `) ${digits.slice(4, 7)}`;
        }
        if (digits.length > 7) {
            formatted += `-${digits.slice(7, 9)}`;
        }
        if (digits.length > 9) {
            formatted += `-${digits.slice(9, 11)}`;
        }

        return formatted;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(formatPhone(e.target.value));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && phone.length <= 4) {
            e.preventDefault();
        }
    };

    const handleBlur = () => {
        if (phone.length < 18) {
            setPhone('+7 (');
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.setSelectionRange(phone.length, phone.length);
        }
    }, [phone]);

    return (
        <div className={styles['phone-input-container']}>
            <label htmlFor={styles.phone}>Номер телефона</label>
            <input
                ref={inputRef}
                type="tel"
                id="phone"
                value={phone}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                placeholder="+7 (___) ___-__-__"
                // maxLength={19}
                className={styles['phone-input']}
            />
            {phone.length < 18 && (
                <div className={styles["error-message"]}>Введите полный номер телефона</div>
            )}
        </div>
    );
};

export default PhoneInput;