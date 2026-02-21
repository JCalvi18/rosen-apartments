"use client";

import React from 'react';
import { contactStyles as styles } from './ContactForm.styles';
import { useLanguage } from '../context/LanguageContext';

export const ContactForm: React.FC = () => {
    const { t } = useLanguage();
    const content = t.contact;

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.heading}>
                        <h2 className={styles.title}>{content.title}</h2>
                    </div>

                    <div className={styles.formContainer}>
                        <form className={styles.form}>
                            <div>
                                <label htmlFor="name" className={styles.label}>{content.name}</label>
                                <input type="text" id="name" name="name" className={styles.input} />
                            </div>
                            <div>
                                <label htmlFor="email" className={styles.label}>{content.email}</label>
                                <input type="email" id="email" name="email" className={styles.input} />
                            </div>
                            <div>
                                <label htmlFor="message" className={styles.label}>{content.message}</label>
                                <textarea id="message" name="message" className={styles.textarea}></textarea>
                            </div>
                            <div>
                                <button type="submit" className={styles.button}>
                                    {content.send}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
