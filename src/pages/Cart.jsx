import { useContext, useState } from 'react';
import CartItem from '../components/CartItem';
import { CartDataContext } from '../components/Layout';
import styles from "../sass/pages/Cart.module.scss";

const Cart = () => {
  const { cartData, cartPrice } = useContext(CartDataContext);
  const [cartDataValue, setCartDataValue] = cartData;
  const [cartPriceValue, setCartPriceValue] = cartPrice;

  const [cartQuantity, setCartQuantity] = useState(0);

  
  return (
    <section className={styles.section}>
      <div className={styles.maxWidthWrap}>
        {cartDataValue.map((e, index) => <CartItem key={index} cartDataValue={e}/>)}

        <div className={styles.cartInfo} style={cartDataValue.length > 0 ? {display: 'block'} : {display: 'none'}}>
            <div>
              Total Items in Cart: {cartQuantity}
              {/* Get quantity of each from cart item and add to cartQuantity  */}

            </div>

            <div>
              Price Total: {`$${cartPriceValue}`}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Cart