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
    price: string;
    tiles: Tile[];
}

export const RoomCard: React.FC<RoomCardProps> = ({
    title,
    images,
    description,
    price,
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
                <p className={styles.price}>{price}</p>
            </div>
        </div>
    );
};
