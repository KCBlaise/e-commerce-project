import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../sass/components/LandingThirdSection.module.scss";
import DisplayCard from './DisplayCard';

const LandingThirdSection = () => {
  const product = [{name: "Blue Shirt", price: 10, id:101}, {name: "Red Dress", price: 50, id:102},{name: "Red Shirt", price: 35, id:103}, {name: "Jeans", price: 50, id:104}, {name: "Red Blouse", price: 29, id:105}, {name: "Red Polo", price: 29, id:106}]

  return (
    <section className={styles.section}>
      <div className={styles.maxWidthWrap}>
        <h3>Today's Offers</h3>

        <div className={styles.grid}>
          {product.map((product, index) => <DisplayCard product={product} key={index} />)}
        </div>

        <Link to={'/products'}><button className={styles.seeMore}>See More</button></Link>
      </div>
    </section>
  )
}

export default LandingThirdSection