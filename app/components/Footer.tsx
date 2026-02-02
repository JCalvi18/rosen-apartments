"use client";

import React from 'react';
import Link from 'next/link';
import { footerStyles } from './Footer.styles';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
    const { t } = useLanguage();
    const content = t.footer;
    const nav = t.header.nav; // Reusing nav translations for links if needed or hardcoded? 
    // Wait, texts.json has "nav" inside "header". Footer usually has similar links.
    // The previous Footer had "Legal" and "Privacy" hardcoded in English.
    // Let's use the translated nav items.

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.container}>
                <p className={footerStyles.text}>{content.copyright}</p>
                <div className={footerStyles.linksWrapper}>
                    <Link href="/legal" className={footerStyles.link}>{nav.legal}</Link>
                    <Link href="/privacy" className={footerStyles.link}>{nav.privacy}</Link>
                </div>
            </div>
        </footer>
    );
};
