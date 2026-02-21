"use client";

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { quickFactsStyles as styles } from './QuickFacts.styles';
import { RoomModal } from './RoomModal';
import { ModalSection } from './RoomCard';

export const QuickFacts: React.FC = () => {
    const { t } = useLanguage();
    const content = (t.information as any);
    const m = content.modal;
    const generalItems: string[] = m.general.items;
    const [showModal, setShowModal] = useState(false);

    const allSections: ModalSection[] = [
        m.general, m.location, m.living, m.kitchen, m.bathroom, m.cleaning, m.premiumExtras, m.notPossible,
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {generalItems.slice(0, 3).map((item, i) => (
                    <button key={i} className={styles.factButton}>
                        {item}
                    </button>
                ))}
                <button
                    className={styles.readMoreButton}
                    onClick={() => setShowModal(true)}
                >
                    {content.readMore}
                </button>
            </div>

            {showModal && (
                <RoomModal
                    title={content.premium.title}
                    modalCloseLabel={m.close}
                    modalSections={allSections}
                    onClose={() => setShowModal(false)}
                />
            )}
        </section>
    );
};
