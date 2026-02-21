import React from 'react';
import { reviewsStyles as styles } from './Reviews.styles';

interface Review {
    text: string;
    author: string;
}

const reviews: Review[] = [
    {
        text: "Very comfortable and quiet, everything you need is there. I really like the quality of their prices and how easy it is to find an apartment. 100% recommended.",
        author: "Anonymous",
    },
    {
        text: "Excelente me sentí super cómodo, es pequeño pero muy limpio y agradable. La comunicación fue fácil y la instrucciones de acceso fue fantástica. Volveré",
        author: "Luis",
    },
    {
        text: "Super cozy, nice and warm. It´s clean and directly in the citycenter. Everything is nearby and to reach within minutes.",
        author: "Ann",
    },
];

export const Reviews: React.FC = () => {
    return (
        <section id="reviews" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Reviews</h2>
                <div className={styles.track}>
                    {reviews.map((review, i) => (
                        <div key={i} className={styles.card}>
                            <span className={styles.quote}>"</span>
                            <p className={styles.text}>{review.text}</p>
                            <span className={styles.author}>{review.author}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
