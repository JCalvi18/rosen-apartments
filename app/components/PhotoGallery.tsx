"use client";

import React from 'react';
import { photoGalleryStyles as styles } from './PhotoGallery.styles';

const images = [
    '/images/appartements/premium1.JPG',
    '/images/salutation/front1.JPG',
    '/images/salutation/front2.JPG',
    '/images/salutation/front3.JPG',
    '/images/salutation/front5.JPG',
];

export const PhotoGallery: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.cellWide}>
                        <img src={images[0]} alt="Apartment view 1" className={styles.image} />
                    </div>
                    <div className={styles.cell}>
                        <img src={images[1]} alt="Apartment view 2" className={styles.image} />
                    </div>
                    <div className={styles.cell}>
                        <img src={images[2]} alt="Apartment view 3" className={styles.image} />
                    </div>
                    <div className={styles.cell}>
                        <img src={images[3]} alt="Apartment view 4" className={styles.image} />
                    </div>
                    <div className={styles.cell}>
                        <img src={images[4]} alt="Apartment view 5" className={styles.image} />
                    </div>
                </div>
            </div>
        </section>
    );
};
