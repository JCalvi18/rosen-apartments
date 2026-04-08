"use client";

import { useState } from "react";
import { salutationStyles } from './Salutation.styles';
import { ImageLightbox } from './ImageLightbox';

const HERO_IMAGE = "/images/appartements/premium1.JPG";

export const Salutation: React.FC = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);

    return (
        <section className={salutationStyles.section}>
            <div className={salutationStyles.container}>
                <div className={salutationStyles.imageGrid.wrapper}>
                    <div className={salutationStyles.imageGrid.imageContainer}>
                        <button
                            className="w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            onClick={() => setLightboxOpen(true)}
                            aria-label="View image fullscreen"
                        >
                            <img
                                src={HERO_IMAGE}
                                alt="Rosen Appartements"
                                className={`${salutationStyles.imageGrid.image} cursor-zoom-in`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {lightboxOpen && (
                <ImageLightbox
                    images={[HERO_IMAGE]}
                    initialIndex={0}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </section>
    );
};
