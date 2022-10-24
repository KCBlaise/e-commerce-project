import React from 'react';
import styles from "../sass/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerWrap}>
          <div className={styles.credits}>
            <h4>Icon Credits</h4>
            <span><a href="https://iconscout.com/icons/shopping-cart" target="_blank">Shopping Cart Icon</a> by <a href="https://iconscout.com/contributors/typicons-1" target="_blank">Typicons</a></span>

            <span><a href="https://iconscout.com/icons/search" target="_blank">Search Icon</a> by <a href="https://iconscout.com/contributors/eva-icons">Akveo</a> on <a href="https://iconscout.com">IconScout</a></span>

            <span><a href="https://www.freepik.com/free-vector/letter-n-modern-gradient-logo_31384104.htm">Header Logo by mhafiffuadi</a> on Freepik</span>

            <span><a href="https://iconscout.com/icons/email" target="_blank">Email Icon</a> by <a href="https://iconscout.com/contributors/irfansusanto98" target="_blank">Barudak Lier</a></span>

            <span><a href="https://iconscout.com/icons/hamburger" target="_blank">Hamburger Icon</a> by <a href="https://iconscout.com/contributors/imamdarmawan" target="_blank">POOD Creative</a></span>

            &copy; Blaise Okoyechira, 2022
          </div>

          <div className={`${styles.credits} ${styles.rightCredits}`}>
            <h4>Image Credits</h4>
            <span>Landing Page Model Photo by <a href="https://unsplash.com/@aiony?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aiony Haust</a> on <a href="https://unsplash.com/s/photos/model?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>

            <span></span>

            <span></span>

            <span></span>
          </div>
        </div>

    </footer>
  )
}

export default Footer