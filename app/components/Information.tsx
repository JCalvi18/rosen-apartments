"use client";

import React from 'react';
import { informationStyles as styles } from './Information.styles';
import { useLanguage } from '../context/LanguageContext';
import { RoomCard, Tile } from './RoomCard';

import { FaTv } from "react-icons/fa";
import { TbMicrowave } from "react-icons/tb";
import { FaShower, FaKitchenSet, FaBuildingCircleCheck, FaSquareParking } from "react-icons/fa6";
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

const studioImages = [
    '/images/appartements/studio1.JPG',
    '/images/appartements/studio2.JPG',
    '/images/appartements/studio3.JPG',
    '/images/appartements/studio4.JPG',
];

export const Information: React.FC = () => {
    const { t } = useLanguage();
    const content = t.information as any;

    const roomPrices = {
        premium: { weekday: `€98 / ${content.night}`, weekend: `€119 / ${content.night}` },
        standard: { weekday: `€68 / ${content.night}`, weekend: `€75 / ${content.night}` },
        studio: { weekday: `€68 / ${content.night}`, weekend: `€75 / ${content.night}` },
    };
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
        { Icon: FaSquareParking, label: tl.parking },
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
                        priceWeekday={roomPrices.premium.weekday}
                        priceWeekend={roomPrices.premium.weekend}
                        weekdayLabel={content.weekdayLabel}
                        weekendLabel={content.weekendLabel}
                        tiles={premiumExtraTiles}
                    />
                    <RoomCard
                        title={content.standard.title}
                        images={comfortImages}
                        description={content.standard.description}
                        priceWeekday={roomPrices.standard.weekday}
                        priceWeekend={roomPrices.standard.weekend}
                        weekdayLabel={content.weekdayLabel}
                        weekendLabel={content.weekendLabel}
                        tiles={comfortExtraTiles}
                    />
                    <RoomCard
                        title={content.studio.title}
                        images={studioImages}
                        description={content.studio.description}
                        priceWeekday={roomPrices.studio.weekday}
                        priceWeekend={roomPrices.studio.weekend}
                        weekdayLabel={content.weekdayLabel}
                        weekendLabel={content.weekendLabel}
                        tiles={studioExtraTiles}
                    />
                </div>

            </div>
        </section>
    );
};
