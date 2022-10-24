import { useState } from "react";
import styles from "../sass/components/CartItem.module.scss";
import { ReactComponent as TrashIcon } from "../icons/trash.svg";
import landingImage from "../images/aiony-haust-3TLl_97HNJo-unsplash.jpg";


const CartItem = ({ cartDataValue }) => {
  const [quantity, setQuantity] = useState(1);


  return (
    <div className={styles.item}>

      <figure className={styles.figure}>
      <img src={landingImage} alt="" />
      </figure>

      <div className={styles.wrap}>
        <div className={styles.details}>
          <span>{`${cartDataValue.name}`}</span>
          <span>{`$${cartDataValue.price}`}</span>
        </div>

        <div className={styles.functional}>

          <span className={styles.quantity}>Quantity
            <button  className={styles.control} onClick={ quantity>0 ? () => setQuantity(quantity-1) : () => setQuantity(0)}>&#45;</button>

            <div className={styles.showQuantity}>{quantity}</div>
            
            <button className={styles.control} onClick={() => setQuantity(quantity+1)}>&#43;</button>   
          </span>
          
          <span className={styles.remove}><TrashIcon /></span>
        
        </div>

      </div>
    </div>
  )
}

export default CartItem