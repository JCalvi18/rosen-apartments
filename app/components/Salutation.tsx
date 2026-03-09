"use client";

import React from 'react';
import { salutationStyles } from './Salutation.styles';

const images = [
    '/images/appartements/premium1.JPG',
    '/images/salutation/front1.JPG',
    '/images/salutation/front2.JPG',
    '/images/salutation/front3.JPG',
    '/images/salutation/front5.JPG',
];

export const Salutation: React.FC = () => {
    return (
        <section className={salutationStyles.section}>
            <div className={salutationStyles.container}>

                <div className={salutationStyles.imageGrid.wrapper}>
                    <div className={salutationStyles.imageGrid.grid}>
                        {/* Col 1, Row 1 */}
                        <div className={salutationStyles.imageGrid.cellWide}>
                            <img src={images[0]} alt="Apartment view 1" className={salutationStyles.imageGrid.image} />
                        </div>
                        {/* Col 2–3, Row 1 (wide) */}
                        <div className={salutationStyles.imageGrid.cell}>
                            <img src={images[1]} alt="Apartment view 2" className={salutationStyles.imageGrid.image} />
                        </div>
                        {/* Col 1, Row 2 */}
                        <div className={salutationStyles.imageGrid.cell}>
                            <img src={images[2]} alt="Apartment view 3" className={salutationStyles.imageGrid.image} />
                        </div>
                        {/* Col 2, Row 2 */}
                        <div className={salutationStyles.imageGrid.cell}>
                            <img src={images[3]} alt="Apartment view 4" className={salutationStyles.imageGrid.image} />
                        </div>
                        {/* Col 3, Row 2 */}
                        <div className={salutationStyles.imageGrid.cell}>
                            <img src={images[4]} alt="Apartment view 5" className={`${salutationStyles.imageGrid.image}`} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
