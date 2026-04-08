"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { ImageLightbox } from "./ImageLightbox";

interface ImageSliderProps {
    images: string[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    const openLightbox = (idx: number) => {
        setLightboxIndex(idx);
        setLightboxOpen(true);
    };

    return (
        <>
            <div className="relative group">
                <div
                    ref={sliderRef}
                    className="keen-slider rounded-lg overflow-hidden shadow-lg h-64 md:h-80 lg:h-96"
                >
                    {images.map((src, idx) => (
                        <div key={idx} className="keen-slider__slide">
                            <button
                                className="w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                onClick={() => openLightbox(idx)}
                                aria-label={`View image ${idx + 1} fullscreen`}
                            >
                                <img
                                    src={src}
                                    alt={`Slide ${idx + 1}`}
                                    className="w-full h-full object-cover cursor-zoom-in"
                                />
                            </button>
                        </div>
                    ))}
                </div>

                {loaded && instanceRef.current && (
                    <>
                        <button
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                            aria-label="Previous slide"
                        >
                            <FaChevronLeft className="w-5 h-5 text-gray-800" />
                        </button>
                        <button
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                            aria-label="Next slide"
                        >
                            <FaChevronRight className="w-5 h-5 text-gray-800" />
                        </button>
                    </>
                )}

                {loaded && instanceRef.current && (
                    <div className="flex justify-center mt-4 space-x-2">
                        {[
                            ...Array(
                                instanceRef.current.track.details.slides.length
                            ).keys(),
                        ].map((idx) => (
                            <button
                                key={idx}
                                onClick={() => instanceRef.current?.moveToIdx(idx)}
                                className={
                                    "w-3 h-3 rounded-full transition-colors " +
                                    (currentSlide === idx
                                        ? "bg-blue-600"
                                        : "bg-gray-300 hover:bg-gray-400")
                                }
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {lightboxOpen && (
                <ImageLightbox
                    images={images}
                    initialIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </>
    );
};
