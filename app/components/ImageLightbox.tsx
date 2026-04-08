"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
    FaChevronLeft,
    FaChevronRight,
    FaXmark,
    FaMagnifyingGlassPlus,
    FaMagnifyingGlassMinus,
} from "react-icons/fa6";

interface ImageLightboxProps {
    images: string[];
    initialIndex: number;
    onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
    images,
    initialIndex,
    onClose,
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [scale, setScale] = useState(1);
    const [translate, setTranslate] = useState({ x: 0, y: 0 });

    const containerRef = useRef<HTMLDivElement>(null);
    const lastPinchDist = useRef<number | null>(null);
    const lastTapTime = useRef(0);
    const swipeStartX = useRef(0);
    const touchStartPos = useRef({ x: 0, y: 0 });
    const translateAtTouchStart = useRef({ x: 0, y: 0 });
    const isPanning = useRef(false);
    const mouseStartPos = useRef<{ x: number; y: number } | null>(null);
    const translateAtMouseStart = useRef({ x: 0, y: 0 });

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const resetView = useCallback(() => {
        setScale(1);
        setTranslate({ x: 0, y: 0 });
    }, []);

    const navigate = useCallback(
        (dir: 1 | -1) => {
            resetView();
            setCurrentIndex((i) => (i + dir + images.length) % images.length);
        },
        [images.length, resetView]
    );

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") navigate(-1);
            if (e.key === "ArrowRight") navigate(1);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [navigate, onClose]);

    // Non-passive touchmove to allow preventDefault on pinch
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const handler = (e: TouchEvent) => {
            if (e.touches.length >= 2) e.preventDefault();
        };
        el.addEventListener("touchmove", handler, { passive: false });
        return () => el.removeEventListener("touchmove", handler);
    }, []);

    // ── Touch handlers ──────────────────────────────────────────────────────

    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 1) {
            swipeStartX.current = e.touches[0].clientX;
            touchStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            translateAtTouchStart.current = translate;
            isPanning.current = scale > 1;
        } else if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            lastPinchDist.current = Math.sqrt(dx * dx + dy * dy);
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.touches.length === 2 && lastPinchDist.current !== null) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const delta = dist - lastPinchDist.current;
            setScale((s) => Math.min(Math.max(s + delta * 0.012, 1), 4));
            lastPinchDist.current = dist;
        } else if (e.touches.length === 1 && isPanning.current) {
            const dx = e.touches[0].clientX - touchStartPos.current.x;
            const dy = e.touches[0].clientY - touchStartPos.current.y;
            setTranslate({
                x: translateAtTouchStart.current.x + dx,
                y: translateAtTouchStart.current.y + dy,
            });
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        lastPinchDist.current = null;
        isPanning.current = false;

        if (scale <= 1) setTranslate({ x: 0, y: 0 });

        if (e.changedTouches.length === 1) {
            const now = Date.now();

            if (now - lastTapTime.current < 280) {
                // Double-tap: toggle zoom
                if (scale > 1) resetView();
                else setScale(2.5);
                lastTapTime.current = 0;
            } else {
                lastTapTime.current = now;
                // Swipe navigation when not zoomed
                if (scale <= 1 && images.length > 1) {
                    const swipeDist = e.changedTouches[0].clientX - swipeStartX.current;
                    if (Math.abs(swipeDist) > 50) {
                        navigate(swipeDist < 0 ? 1 : -1);
                    }
                }
            }
        }
    };

    // ── Mouse handlers (desktop pan) ────────────────────────────────────────

    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale > 1) {
            mouseStartPos.current = { x: e.clientX, y: e.clientY };
            translateAtMouseStart.current = translate;
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!mouseStartPos.current) return;
        setTranslate({
            x: translateAtMouseStart.current.x + (e.clientX - mouseStartPos.current.x),
            y: translateAtMouseStart.current.y + (e.clientY - mouseStartPos.current.y),
        });
    };

    const handleMouseUp = () => {
        mouseStartPos.current = null;
    };

    // ── Zoom buttons ────────────────────────────────────────────────────────

    const handleZoomIn = () => setScale((s) => Math.min(s + 0.75, 4));
    const handleZoomOut = () => {
        const next = Math.max(scale - 0.75, 1);
        setScale(next);
        if (next <= 1) setTranslate({ x: 0, y: 0 });
    };

    return (
        <div className="fixed inset-0 z-100 bg-black flex flex-col touch-none">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-black/70 shrink-0">
                <span className="text-white/60 text-sm tabular-nums">
                    {images.length > 1 ? `${currentIndex + 1} / ${images.length}` : ""}
                </span>
                <div className="flex items-center gap-0.5">
                    <button
                        onClick={handleZoomOut}
                        disabled={scale <= 1}
                        className="text-white p-2.5 rounded-full disabled:opacity-30 active:bg-white/10 touch-manipulation"
                        aria-label="Zoom out"
                    >
                        <FaMagnifyingGlassMinus size={20} />
                    </button>
                    <button
                        onClick={handleZoomIn}
                        disabled={scale >= 4}
                        className="text-white p-2.5 rounded-full disabled:opacity-30 active:bg-white/10 touch-manipulation"
                        aria-label="Zoom in"
                    >
                        <FaMagnifyingGlassPlus size={20} />
                    </button>
                    <button
                        onClick={onClose}
                        className="text-white p-2.5 rounded-full active:bg-white/10 touch-manipulation ml-1"
                        aria-label="Close"
                    >
                        <FaXmark size={22} />
                    </button>
                </div>
            </div>

            {/* Image area */}
            <div
                ref={containerRef}
                className="flex-1 overflow-hidden flex items-center justify-center relative"
                style={{ cursor: scale > 1 ? (mouseStartPos.current ? "grabbing" : "grab") : "default" }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="max-w-full max-h-full object-contain select-none"
                    style={{
                        transform: `scale(${scale}) translate(${translate.x / scale}px, ${translate.y / scale}px)`,
                        transition: scale === 1 ? "transform 0.2s ease" : undefined,
                        pointerEvents: "none",
                        userSelect: "none",
                    }}
                    draggable={false}
                />

                {/* Prev / Next — hidden when zoomed */}
                {images.length > 1 && scale <= 1 && (
                    <>
                        <button
                            onClick={() => navigate(-1)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full touch-manipulation z-10"
                            aria-label="Previous image"
                        >
                            <FaChevronLeft size={18} />
                        </button>
                        <button
                            onClick={() => navigate(1)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full touch-manipulation z-10"
                            aria-label="Next image"
                        >
                            <FaChevronRight size={18} />
                        </button>
                    </>
                )}

                {/* Double-tap / pinch hint */}
                {scale === 1 && (
                    <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/40 text-xs pointer-events-none select-none whitespace-nowrap">
                        Double-tap or pinch to zoom
                    </p>
                )}
            </div>

            {/* Dot indicators */}
            {images.length > 1 && (
                <div className="flex justify-center gap-2 py-3 shrink-0 bg-black/70">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { resetView(); setCurrentIndex(i); }}
                            className={`w-2 h-2 rounded-full transition-colors touch-manipulation ${
                                i === currentIndex ? "bg-white" : "bg-white/30 hover:bg-white/60"
                            }`}
                            aria-label={`Go to image ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
