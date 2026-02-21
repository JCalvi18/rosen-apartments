"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import content from '../content/texts.json';

export type Language = 'en' | 'de' | 'fr' | 'es' | 'ru';
type ContentType = typeof content['en'];

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: ContentType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    // Safety check to fallback to English if translation is missing (though our JSON is complete)
    const t = (content as any)[language] || content['en'];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
