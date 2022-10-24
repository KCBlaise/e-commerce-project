import React from 'react';
import styles from "../sass/components/Newsletter.module.scss";
import { ReactComponent as EmailIcon } from "../icons/email.svg";

const Newsletter = () => {
  return (
    <section className={styles.section}>
        <div className={styles.maxWidthWrap}>
            <h3>Be the First to Know</h3>
            <p>Subscribe to our newsletter to get updates on our latest offers.</p>

            <p>With your subscription, you can also receive an online copy of the Lorem Ipsum Magazine to stay in touch with the latest fashion trends.</p>

            <div className={styles.emailContainer}>
                <label htmlFor='email-to-subscribe'><EmailIcon/></label>

                <input className={styles.email} type="email" name="email-to-subscribe" id="email-to-subscribe" placeholder='Enter your Email Address'/>
            </div>


            <button className={styles.subscribe}>Subscribe</button>

        </div>
    </section>
  )
}

export default Newsletter