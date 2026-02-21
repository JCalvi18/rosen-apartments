"use client";

import React from 'react';
import { roomCardStyles as styles } from './RoomCard.styles';
import { ModalSection } from './RoomCard';

interface RoomModalProps {
    title: string;
    modalCloseLabel: string;
    modalSections: ModalSection[];
    onClose: () => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({
    title,
    modalCloseLabel,
    modalSections,
    onClose,
}) => {
    return (
        <div
            className={styles.overlay}
            onClick={onClose}
        >
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modalHeader}>
                    <span className={styles.modalTitle}>{title}</span>
                    <button
                        onClick={onClose}
                        className={styles.modalClose}
                        aria-label={modalCloseLabel}
                    >
                        ×
                    </button>
                </div>
                <div className={styles.modalBody}>
                    {modalSections.map((section, i) => (
                        <div key={i}>
                            <p className={styles.sectionTitle}>{section.title}</p>
                            <ul className={styles.sectionItems}>
                                {section.items.map((item, j) => (
                                    <li key={j} className={styles.sectionItem}>
                                        <span className={styles.sectionItemDot} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
