"use client";

import React from 'react';
import { informationStyles } from './Information.styles';
import { FaWifi, FaSquareParking, FaKitchenSet, FaBroom } from "react-icons/fa6";
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
    wifi: FaWifi,
    parking: FaSquareParking,
    kitchen: FaKitchenSet,
    cleaning: FaBroom,
};

export const Information: React.FC = () => {
    const { t } = useLanguage();
    const content = t.information;

    return (
        <section className={informationStyles.section}>
            <div className={informationStyles.container}>
                <div className={informationStyles.wrapper}>
                    <div className={informationStyles.details.container}>
                        <div>
                            <h2 className={informationStyles.details.title}>
                                Experience Comfort
                            </h2>
                            <p className={informationStyles.details.text}>
                                {content.address}
                            </p>
                        </div>

                        <div className={informationStyles.details.serviceGrid}>
                            {Object.entries(content.services).map(([key, label]) => {
                                const Icon = iconMap[key as keyof typeof iconMap] || FaWifi;
                                return (
                                    <div key={key} className={informationStyles.details.serviceItem}>
                                        <Icon className={informationStyles.details.serviceIcon} />
                                        <span className={informationStyles.details.serviceText}>{label}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={informationStyles.details.sizeGrid}>
                            {Object.entries(content.sizes).map(([key, label]) => (
                                <div key={key} className={informationStyles.details.sizeItem}>
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={informationStyles.map.container}>
                        <div className={informationStyles.map.placeholder}>
                            Google Maps Implementation Required
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
