import { useContext, useState } from 'react';
import Media from 'react-media';
import { ReactComponent as CartIcon } from "../icons/shopping-cart.svg";
import styles from "../sass/components/DisplayCard.module.scss";
import landingImage from "../images/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import { CartDataContext } from './Layout';
// import axios from "axios";



const DisplayCard = ({ product }) => {

  const { cartData, cartId, cartPrice } = useContext(CartDataContext);
  const [cartDataValue, setCartDataValue] = cartData;
  const [cartIdValue, setCartIdValue] = cartId;
  const [cartPriceValue, setCartPriceValue] = cartPrice;


  const handleCart = () => {
    // only add if product  is not in cart already
    if (!cartIdValue.includes(product.id)) {
      setCartDataValue(cartData => [...cartData, product]);
      setCartIdValue(cartId => [...cartId,product.id]);
      setCartPriceValue(cartPriceValue+product.price);
      console.log([...cartIdValue,product.id]);
      console.log([...cartDataValue, product]);
      console.log(cartPriceValue+product.price);
      console.log('end');
    }
    else {
      alert(`${product.name} is already in cart.\n\nIf you want to buy more than one, you can increase quantity in cart.`);
    }
  }

  return (
    <div className={styles.item}>
        <figure className={styles.figure}>
            <img src={landingImage} alt="" />
        </figure>
        <span className={styles.itemName}>{product.name}</span>
        <span className={styles.price}>{`$${product.price}`}</span>

        <Media query="(max-width: 480px)">
          {matches =>
            matches ? <button className={styles.addToCart} onClick={handleCart} ><CartIcon/></button> : <button className={styles.addToCart} onClick={handleCart} >Add to Cart <CartIcon/></button>}
        </Media>

    </div>
  )
}

export default DisplayCard