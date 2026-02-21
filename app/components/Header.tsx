"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700'] });
import { headerStyles } from './Header.styles';
import { Language, useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
    const { t, language, setLanguage } = useLanguage();

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'es', label: 'Español', flag: '🇪🇸' },
        { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    ];

    const sectionNav = (t.header as any).sectionNav;
    const sections = [
        { id: 'rooms',       label: sectionNav.rooms },
        { id: 'location',    label: sectionNav.location },
        { id: 'reviews',     label: sectionNav.reviews },
        { id: 'reservation', label: sectionNav.reservation },
        { id: 'contact',     label: sectionNav.contact },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleLanguageSelect = (lang: Language) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.container}>
                <div className={headerStyles.wrapper}>
                    <div className={headerStyles.logo.link}>
                        <Image src="/images/logo.png" alt="Rosen Appartements" width={32} height={32} />
                        <Link href="/" className={`${headerStyles.logo.text} ${montserrat.className}`}>
                            Rosen Appartements
                        </Link>
                    </div>

                    <nav className={headerStyles.nav.desktopContainer}>
                        <Link href="/" className={headerStyles.nav.link}>{t.header.nav.home}</Link>
                        <Link href="/legal" className={headerStyles.nav.link}>{t.header.nav.legal}</Link>
                        <Link href="/privacy" className={headerStyles.nav.link}>{t.header.nav.privacy}</Link>
                    </nav>

                    <div className={headerStyles.controls.container} ref={dropdownRef}>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={headerStyles.controls.langButton}
                        >
                            <span>{languages.find(l => l.code === language)?.flag}</span>
                            <span>{language.toUpperCase()}</span>
                            <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isOpen && (
                            <div className={headerStyles.controls.dropdown}>
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageSelect(lang.code)}
                                        className={`${headerStyles.controls.dropdownItem} ${language === lang.code ? headerStyles.controls.activeItem : ''}`}
                                    >
                                        <span>{lang.flag}</span>
                                        <span>{lang.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Section nav — slides in on scroll */}
            <div className={`${headerStyles.sectionNav.bar} ${scrolled ? headerStyles.sectionNav.barVisible : headerStyles.sectionNav.barHidden}`}>
                <div className={headerStyles.sectionNav.inner}>
                    {sections.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => scrollTo(s.id)}
                            className={headerStyles.sectionNav.link}
                        >
                            {s.label}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};

