import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from "../icons/shopping-cart.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ReactComponent as HamburgerIcon } from "../icons/hamburger.svg"
import styles from "../sass/components/Header.module.scss";
import Logo from "../images/letter_n_modern_gradient_logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <figure className={styles.logo}>
          <Link to={'/'}>
            <img src={Logo} alt="" />
          </Link>
        </figure>

        <nav className={styles.nav}>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/products'}>Products</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/cart'}><CartIcon/></Link></li>
            <li><Link to={'/search'}><SearchIcon/></Link></li>
          </ul>

          <div className={styles.hamburgerIcon}>
            <HamburgerIcon />
          </div>

        </nav>
      </div>  
    </header>
  )
}

export default Header