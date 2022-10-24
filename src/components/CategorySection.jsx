import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../sass/components/CategorySection.module.scss";


const CategorySection = () => {
  return (
    <section className={styles.section}>
        <div className={styles.maxWidthWrap}>
            <h3>Shop by Category</h3>
            
            <div className={styles.grid}>
                <div className={styles.categories}>
                    <h4><Link to={'/men'}>Men's Clothing</Link></h4>
                    Shop for top quality shirts, trousers, suits and more.
                </div>
                
                <div className={styles.categories}>
                    <h4><Link to={'/women'}>Women's Clothing</Link></h4>
                    Be sure to turn heads with our unique designs.
                </div>
                
                <div className={styles.categories}>
                    <h4><Link to={'/everyone'}>All Pronouns</Link></h4>
                    Lorem Ipsum is for everyone.
                </div>
                
                <div className={styles.categories}>
                    <h4><Link to={'/teens'}>Teen Fever</Link></h4>
                    A wide variety of selections that allow you showcase your truth.
                </div>
                
                <div className={styles.categories}>
                    <h4><Link to={'/kids'}>Kids' Wears</Link></h4>
                    Keep the kids looking cool in these.
                </div>
                
                <div className={styles.categories}>
                    <h4><Link to={'/accessories'}>Accessories</Link></h4>
                    What is a nice outfit without a great watch to boot.
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default CategorySection