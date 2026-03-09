"use client";

import { salutationStyles } from './Salutation.styles';

export const Salutation: React.FC = () => {
    return (
        <section className={salutationStyles.section}>
            <div className={salutationStyles.container}>
                <div className={salutationStyles.imageGrid.wrapper}>
                    <div className={salutationStyles.imageGrid.imageContainer}>
                        <img src="/images/appartements/premium1.JPG" alt="Rosen Appartements" className={salutationStyles.imageGrid.image} />
                    </div>
                </div>
            </div>
        </section>
    );
};
