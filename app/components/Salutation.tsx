"use client";

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { salutationStyles } from './Salutation.styles';
import { useLanguage } from '../context/LanguageContext';

// Placeholder images
const images = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
];

export const Salutation: React.FC = () => {
    const { t } = useLanguage();
    const content = t.salutation;

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 1,
            spacing: 15,
        },
    });

    return (
        <section className={salutationStyles.section}>
            <div className={salutationStyles.container}>
                <div className={salutationStyles.contentWrapper}>
                    <h1 className={salutationStyles.branding.title}>
                        {content.brandName}
                    </h1>
                    <p className={salutationStyles.branding.slogan}>
                        {content.slogan}
                    </p>
                </div>

                <div className={salutationStyles.slider.wrapper}>
                    <div ref={sliderRef} className={salutationStyles.slider.container}>
                        {images.map((src, idx) => (
                            <div key={idx} className={salutationStyles.slider.slide}>
                                <img src={src} alt={`Slide ${idx + 1}`} className={salutationStyles.slider.image} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
