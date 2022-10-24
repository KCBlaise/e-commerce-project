import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../sass/components/ProductsRow.module.scss";
import DisplayCard from '../components/DisplayCard';

const ProductsRow = ({ rowName, pageLink, products }) => {
  return (
    <div className={styles.maxWidthWrap}>
        
        <div className={styles.rowHeader}>
            <h3>{rowName}</h3>
            <Link to={pageLink}><button className={styles.seeMore}>See More</button></Link>
        </div>
        
        <div className={styles.displayRow}>
            {products.map((product, index) => <DisplayCard product={product} key={index} />)}
        </div>
    </div>
  )
}

export default ProductsRow