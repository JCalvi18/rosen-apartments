"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { headerStyles } from './Header.styles';
import { Language, useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
    const { t, language, setLanguage } = useLanguage();

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: 'English' },
        { code: 'de', label: 'Deutsch' },
        { code: 'fr', label: 'Français' }
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

    const handleLanguageSelect = (lang: Language) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.container}>
                <div className={headerStyles.wrapper}>
                    <div className={headerStyles.logo.link}>
                        {/* Simple Logo Placeholder */}
                        <div className="h-8 w-8 bg-blue-600 rounded-lg"></div>
                        <Link href="/" className={headerStyles.logo.text}>
                            Rosen Apartments
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
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

