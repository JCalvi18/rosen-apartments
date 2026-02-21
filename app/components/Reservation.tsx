"use client";

import React, { useState } from 'react';
import { reservationStyles } from './Reservation.styles';
import { useLanguage } from '../context/LanguageContext';

export const Reservation: React.FC = () => {
    const { t } = useLanguage();
    const content = t.reservation;
    const [loading, setLoading] = useState(false);

    const handleCheck = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            alert("This would check availability against an external API.");
            setLoading(false);
        }, 1000);
    };

    return (
        <section id="reservation" className={reservationStyles.section}>
            <div className={reservationStyles.container}>
                <div className={reservationStyles.wrapper}>
                    <div className={reservationStyles.header}>
                        <h2 className={reservationStyles.title}>{content.title}</h2>
                    </div>
                    <form onSubmit={handleCheck} className={reservationStyles.form}>
                        <div className={reservationStyles.grid}>
                            <div>
                                <label className={reservationStyles.label}>{content.checkIn}</label>
                                <input type="date" className={reservationStyles.input} required />
                            </div>
                            <div>
                                <label className={reservationStyles.label}>{content.checkOut}</label>
                                <input type="date" className={reservationStyles.input} required />
                            </div>
                            <div className="sm:col-span-2">
                                <label className={reservationStyles.label}>{content.guests}</label>
                                <select className={reservationStyles.input}>
                                    <option>1 Guest</option>
                                    <option>2 Guests</option>
                                    <option>3 Guests</option>
                                    <option>4+ Guests</option>
                                </select>
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={reservationStyles.button}
                        >
                            {loading ? 'Checking...' : content.button}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
