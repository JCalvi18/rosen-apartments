"use client";

import React from 'react';
import { ImageSlider } from './ImageSlider';
import { roomCardStyles as styles } from './RoomCard.styles';

export interface Tile {
    Icon: React.ElementType;
    label: string;
}

export interface ModalSection {
    title: string;
    items: string[];
}

interface RoomCardProps {
    title: string;
    images: string[];
    description: string;
    priceWeekday: string;
    priceWeekend: string;
    weekdayLabel: string;
    weekendLabel: string;
    tiles: Tile[];
}

export const RoomCard: React.FC<RoomCardProps> = ({
    title,
    images,
    description,
    priceWeekday,
    priceWeekend,
    weekdayLabel,
    weekendLabel,
    tiles,
}) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.sliderWrapper}>
                <ImageSlider images={images} />
            </div>

            <div className={styles.tilesRow}>
                {tiles.map(({ Icon, label }, i) => (
                    <div key={i} className={styles.tile}>
                        <Icon size={34} className={styles.tileIcon} />
                        <span className={styles.tileLabel}>{label}</span>
                    </div>
                ))}
            </div>

            <hr className={styles.tileDivider} />

            <div className={styles.body}>
                <p className={styles.description}>{description}</p>
                <hr className={styles.divider} />
                <div className={styles.priceContainer}>
                    <div className={styles.priceCol}>
                        <p className={styles.priceLabel}>{weekdayLabel}</p>
                        <p className={styles.price}>{priceWeekday}</p>
                    </div>
                    <div className={styles.priceCol}>
                        <p className={styles.priceLabel}>{weekendLabel}</p>
                        <p className={styles.price}>{priceWeekend}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
