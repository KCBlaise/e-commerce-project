import Media from 'react-media';
import styles from "../../sass/components/LandingFirstComponents/ShopMen.module.scss";
import shopMenImage from "../../images/calicadoo-ttdio_nOPjQ-unsplash.jpg";
import { Link } from 'react-router-dom';


const ShopMen = ({ parentStyle }) => {
  return (
    <Media query="(max-width: 480px)">
      {matches =>
        matches ? (
          <section className={`${parentStyle.section} ${styles.sectionbg}`} style={{ backgroundImage:`url(${shopMenImage})` }}>
            <div className={parentStyle.maxWidthWrap}>
              <div className={parentStyle.landingText}>
                <h2 className={`${parentStyle.h2} ${styles.h2Color}`}>The Essence of Man</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum, incidunt aspernatur tenetur blanditiis molestias? Simi lique animi mollitia vitae commodi.

                <Link to={'/men'}><button className={styles.shopNow}>Shop Men's Clothing</button></Link>
              </div>

            </div>
          </section>
          

        ) : 

        (
          <section className={`${parentStyle.section} ${styles.sectionbg}`}>
            <div className={parentStyle.maxWidthWrap}>
              
              <div className={parentStyle.landingText}>
                
                <h2 className={`${parentStyle.h2} ${styles.h2Color}`}>The Essence of Man</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum, incidunt aspernatur tenetur blanditiis molestias? Simi lique animi mollitia vitae commodi.

                <Link to={'/men'}><button className={styles.shopNow}>Shop Men's Clothing</button></Link>
              </div>

              <figure className={parentStyle.landingImage}>
                <img src={shopMenImage} alt="" />

              </figure>

            </div>
          </section>
        )
      }
      
    </Media>
  )
}

export default ShopMen