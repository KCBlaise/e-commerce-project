import React from 'react';
import styles from "../sass/components/LandingSecondSection.module.scss";

const LandingSecondSection = () => {
  return (
    <section className={styles.section}>
        <div className={styles.maxWidthWrap}>
            <h3>Why Shop with Us?</h3>

            <div className={styles.grid}>
                <div className={styles.gridItem}>
                    <h4>Quality Products</h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi tempore placeat assumenda maiores voluptatem.
                </div>

                <div className={styles.gridItem}>
                    <h4>Worldwide Delivery</h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi tempore placeat assumenda maiores voluptatem.
                </div>

                <div className={styles.gridItem}>
                    <h4>Customer Service</h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi tempore placeat assumenda maiores voluptatem.
                </div>

            </div>
        </div>
    </section>
  )
}

export default LandingSecondSection