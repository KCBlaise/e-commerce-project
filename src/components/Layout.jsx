import React, { useState, createContext } from 'react';
import Footer from './Footer';
import Header from './Header';

export const CartDataContext = createContext();

const Layout = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [cartId, setCartId] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);

  // const addToCartData = (product) => {
  //   setCartData(cartData => [...cartData, product]);
  // }


  return (
    <CartDataContext.Provider value={{ cartData: [cartData, setCartData], cartId: [cartId, setCartId], cartPrice: [cartPrice, setCartPrice]}}>
        <Header/>
        {children}
        <Footer/>
    </CartDataContext.Provider>
  )
}

export default Layout