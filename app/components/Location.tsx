"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { locationStyles as styles } from './Location.styles';

export const Location: React.FC = () => {
    const { t } = useLanguage();
    const loc = (t as any).location;

    return (
        <section id="location" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{loc.title}</h2>

                <div className={styles.grid}>
                    {/* Left: address + arrival + nearby */}
                    <div className={styles.left}>
                        <div className={styles.addressBlock}>
                            <p className={styles.addressHeading}>{loc.addressTitle}</p>
                            <p className={styles.addressLine}>{loc.street}</p>
                            <p className={styles.addressLine}>{loc.city}</p>
                            <p className={styles.addressLine}>{loc.country}</p>
                        </div>

                        <div>
                            <p className={styles.subHeading}>{loc.arrivalTitle}</p>
                            <ul className={styles.list}>
                                {loc.arrival.map((item: string, i: number) => (
                                    <li key={i} className={styles.listItem}>
                                        <span className={styles.listDot} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className={styles.subHeading}>{loc.nearbyTitle}</p>
                            <ul className={styles.list}>
                                {loc.nearby.map((item: string, i: number) => (
                                    <li key={i} className={styles.listItem}>
                                        <span className={styles.listDot} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: map */}
                    <div className={styles.mapWrapper}>
                        <iframe
                            className={styles.mapFrame}
                            src="https://www.openstreetmap.org/export/embed.html?bbox=6.9669%2C49.2254%2C7.0269%2C49.2454&layer=mapnik&marker=49.2354%2C6.9969"
                            title="Map"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
