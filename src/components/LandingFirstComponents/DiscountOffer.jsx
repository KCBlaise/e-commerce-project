import Media from 'react-media';
import styles from "../../sass/components/LandingFirstComponents/DiscountOffer.module.scss";
import landingImage from "../../images/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import { Link } from 'react-router-dom';


const DiscountOffer = ({ parentStyle }) => {
  return (
    <Media query="(max-width: 480px)">
      {matches =>
        matches ? (
          <section className={parentStyle.section} style={{ backgroundImage:`url(${landingImage})` }}>
            <div className={parentStyle.maxWidthWrap}>
              <div className={parentStyle.landingText}>
                <h2 className={`${parentStyle.h2} ${styles.h2Color}`}>Get 20% Off Your Next Purchase</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum, incidunt aspernatur tenetur blanditiis molestias? Simi lique animi mollitia vitae commodi.

                <Link to={'/products'}><button className={styles.shopNow}>Shop Now</button></Link>
              </div>

            </div>
          </section>
          

        ) : 

        (
          <section className={`${parentStyle.section} ${styles.sectionbg}`}>
            <div className={parentStyle.maxWidthWrap}>
              
              <div className={parentStyle.landingText}>
                
                <h2 className={`${parentStyle.h2} ${styles.h2Color}`}>Get 20% Off Your Next Purchase</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum, incidunt aspernatur tenetur blanditiis molestias? Simi lique animi mollitia vitae commodi.

                <Link to={'/products'}><button className={styles.shopNow}>Shop Now</button></Link>
              </div>

              <figure className={parentStyle.landingImage}>
                <img src={landingImage} alt="" />

              </figure>

            </div>
          </section>
        )
      }
      
    </Media>
  )
}

export default DiscountOffer