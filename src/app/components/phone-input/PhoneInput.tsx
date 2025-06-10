"use client"
import { useState, useEffect, useRef, ChangeEvent } from 'react';
import styles from './phone-input.module.css'

const PhoneInput = () => {
    const [phone, setPhone] = useState<string>('+7 (');
    const inputRef = useRef<HTMLInputElement>(null);

    const formatPhone = (value: string): string => {
        if (!value) return '+7 (';

        const cleaned = value.replace(/\D/g, '');

        let formatted = cleaned.startsWith('7') ? '+' + cleaned : '+7' + cleaned.slice(1);

        if (formatted.length > 2) formatted = formatted.slice(0, 2) + ' (' + formatted.slice(2);
        if (formatted.length > 7) formatted = formatted.slice(0, 7) + ') ' + formatted.slice(7);
        if (formatted.length > 12) formatted = formatted.slice(0, 12) + '-' + formatted.slice(12, 14);
        if (formatted.length > 15) formatted = formatted.slice(0, 15) + '-' + formatted.slice(15, 17);

        return formatted.slice(0, 18);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const formatted = formatPhone(input);
        setPhone(formatted);
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
                maxLength={18}
                className={styles['phone-input']}
            />
            {phone.length < 18 && (
                <div className={styles["error-message"]}>Введите полный номер телефона</div>
            )}
        </div>
    );
};

export default PhoneInput;