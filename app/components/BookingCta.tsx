"use client";

import React from 'react';
import { MdEmail } from 'react-icons/md';
import { bookingCtaStyles as styles } from './BookingCta.styles';
import { useLanguage } from '../context/LanguageContext';

// Booking.com brand icon (from simple-icons)
const BookingComIcon = ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M10.527 0C4.71 0 0 4.71 0 10.527v2.946C0 19.29 4.71 24 10.527 24h2.946C19.29 24 24 19.29 24 13.473V10.527C24 4.71 19.29 0 13.473 0zm1.473 5.6c.957 0 1.698.206 2.223.617.525.411.787.986.787 1.725 0 .491-.14.908-.42 1.25-.279.343-.664.572-1.155.689.57.099 1.018.337 1.344.713.326.376.489.848.489 1.416 0 .793-.272 1.41-.816 1.849-.545.44-1.31.66-2.296.66H8.8V5.6h3.2zm-1.6 1.2v1.9h1.5c.38 0 .676-.085.887-.254.211-.17.317-.41.317-.72 0-.633-.4-.95-1.2-.95zm0 3.1v2.1h1.65c.42 0 .75-.096.988-.288.237-.192.356-.463.356-.813 0-.666-.448-1-1.344-1z" />
    </svg>
);

const BOOKING_URL = 'https://www.booking.com/hotel/de/rosenappartements.html'; // TODO: replace with your property URL
const EMAIL = 'booking@rosen-apartments.de';

export const BookingCta: React.FC = () => {
    const { t } = useLanguage();
    const content = (t as any).cta;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>{content.heading}</h2>
                <div className={styles.buttons}>
                    <a href={`mailto:${EMAIL}`} className={styles.emailButton}>
                        <MdEmail size={22} />
                        {content.emailButton}
                    </a>
                    <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.bookingButton}
                    >
                        <BookingComIcon size={22} />
                        {content.bookingButton}
                    </a>
                </div>
            </div>
        </section>
    );
};
