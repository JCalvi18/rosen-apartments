"use client";

import React from 'react';
import { informationStyles as styles } from './Information.styles';
import { useLanguage } from '../context/LanguageContext';
import { RoomCard, Tile } from './RoomCard';

import { FaTv } from "react-icons/fa";
import { TbMicrowave } from "react-icons/tb";
import { FaShower, FaKitchenSet, FaBuildingCircleCheck } from "react-icons/fa6";
import { IoBedSharp } from "react-icons/io5";
import { MdCoffeeMaker } from "react-icons/md";
import { LiaCitySolid } from "react-icons/lia";
import { PiTowelBold } from "react-icons/pi";
import { BsSafe2 } from "react-icons/bs";
import { LuBedDouble } from "react-icons/lu";
import { LuBedSingle } from "react-icons/lu";

const premiumImages = [
    '/images/appartements/premium1.JPG',
    '/images/appartements/premium2.JPG',
    '/images/appartements/premium3.JPG',
    '/images/appartements/premium4.JPG',
];

const comfortImages = [
    '/images/appartements/normal1.JPG',
    '/images/appartements/normal2.JPG',
    '/images/appartements/normal3.JPG',
    '/images/appartements/normal4.JPG',
    '/images/appartements/normal5.JPG',
    '/images/appartements/normal6.JPG',
];

export const Information: React.FC = () => {
    const { t } = useLanguage();
    const content = t.information as any;
    const tl = content.tiles;

    const commonTiles: Tile[] = [
        { Icon: FaBuildingCircleCheck, label: tl.checkIn },
        { Icon: PiTowelBold, label: tl.towels },
        { Icon: FaKitchenSet, label: tl.kitchen },
        { Icon: FaShower, label: tl.shower },
        { Icon: TbMicrowave, label: tl.microwave },
        { Icon: FaTv, label: tl.tv },
        { Icon: LiaCitySolid, label: tl.location },
    ];

    const premiumExtraTiles: Tile[] = [
        { Icon: MdCoffeeMaker, label: tl.coffee },
        { Icon: IoBedSharp, label: tl.kingsizeBed },
        { Icon: BsSafe2, label: tl.safe },
    ];

    const comfortExtraTiles: Tile[] = [
        { Icon: LuBedDouble, label: tl.queenBed },
    ];

    const studioExtraTiles: Tile[] = [
        { Icon: LuBedSingle, label: tl.singleBed },
    ];


    return (
        <section id="rooms" className={styles.section}>
            <div className={styles.container}>

                {/* Shared amenities — common to both appartements */}
                <div className={styles.sharedSection}>
                    <p className={styles.sharedHeading}>{content.amenitiesHeading}</p>
                    <div className={styles.sharedTilesRow}>
                        {commonTiles.map(({ Icon, label }, i) => (
                            <div key={i} className={styles.sharedTile}>
                                <Icon size={44} className={styles.sharedTileIcon} />
                                <span className={styles.sharedTileLabel}>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Room cards — unique extras only */}
                <div className={styles.cardRow}>
                    <RoomCard
                        title={content.premium.title}
                        images={premiumImages}
                        description={content.premium.description}
                        price={content.premium.price}
                        tiles={premiumExtraTiles}
                    />
                    <RoomCard
                        title={content.standard.title}
                        images={comfortImages}
                        description={content.standard.description}
                        price={content.standard.price}
                        tiles={comfortExtraTiles}
                    />

                    <RoomCard
                        title={content.studio.title}
                        images={comfortImages}
                        description={content.studio.description}
                        price={content.studio.price}
                        tiles={studioExtraTiles}
                    />
                </div>

            </div>
        </section>
    );
};
