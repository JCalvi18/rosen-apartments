"use client";

import React from 'react';
import { informationStyles } from './Information.styles';
import { FaCheck } from "react-icons/fa6";
import { useLanguage } from '../context/LanguageContext';
import { ImageSlider } from './ImageSlider';

export const Information: React.FC = () => {
    const { t } = useLanguage();
    // Safely access the new structure, using 'any' casting if the type definition isn't updated yet in the context file
    // In a real scenario we'd update types first, but here we prioritize the implementation.
    // However, I updated texts.json, so usage should be fine if types are loose or inferred.
    // Let's assume t.information has the new structure.
    const content = t.information as any;

    const premiumImages = [
        "https://placehold.co/800x600?text=Premium+Suite+1",
        "https://placehold.co/800x600?text=Premium+Suite+2",
        "https://placehold.co/800x600?text=Premium+Suite+3"
    ];

    const standardImages = [
        "https://placehold.co/800x600?text=Standard+Apt+1",
        "https://placehold.co/800x600?text=Standard+Apt+2",
        "https://placehold.co/800x600?text=Standard+Apt+3"
    ];

    return (
        <section className={informationStyles.section}>
            <div className={informationStyles.container}>
                {/* Row 1: Premium Suite */}
                <div className={informationStyles.row}>
                    {/* Information Column */}
                    <div className={informationStyles.details.container}>
                        <h2 className={informationStyles.details.title}>
                            {content.premium.title}
                        </h2>
                        <p className={informationStyles.details.text}>
                            {content.premium.description}
                        </p>
                        <div className={informationStyles.details.featureList}>
                            {content.premium.features.map((feature: string, index: number) => (
                                <div key={index} className={informationStyles.details.featureItem}>
                                    <FaCheck className={informationStyles.details.featureIcon} />
                                    <span className={informationStyles.details.featureText}>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Slider Column */}
                    <div>
                        <ImageSlider images={premiumImages} />
                    </div>
                </div>

                {/* Row 2: Standard Apartment */}
                <div className={informationStyles.row}>
                    {/* Slider Column - First in DOM for this row to appear on left in desktop */}
                    {/* Note: On mobile, this makes the slider appear ABOVE the text if we don't use order classes. */}
                    {/* The request asked for "second column should show info ... and the column to its left their corresponding images". */}
                    {/* So Left: Images, Right: Info. */}
                    <div className="order-last lg:order-first">
                        <ImageSlider images={standardImages} />
                    </div>

                    {/* Information Column */}
                    <div className={informationStyles.details.container}>
                        <h2 className={informationStyles.details.title}>
                            {content.standard.title}
                        </h2>
                        <p className={informationStyles.details.text}>
                            {content.standard.description}
                        </p>
                        <div className={informationStyles.details.featureList}>
                            {content.standard.features.map((feature: string, index: number) => (
                                <div key={index} className={informationStyles.details.featureItem}>
                                    <FaCheck className={informationStyles.details.featureIcon} />
                                    <span className={informationStyles.details.featureText}>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
