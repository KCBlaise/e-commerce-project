import Media from 'react-media';
import styles from "../../sass/components/LandingFirstComponents/SummerAd.module.scss";
import summerAdImage from "../../images/dom-hill-nimElTcTNyY-unsplash.jpg";


const SummerAd = ({ parentStyle }) => {
  return (
    <Media query="(max-width: 480px)">
      {matches =>
        matches ? (
          <section className={`${parentStyle.section} ${styles.summerbgTop}`} style={{ backgroundImage:`url(${summerAdImage})` }}>
            <div className={parentStyle.maxWidthWrap}>
              <div className={parentStyle.landingText}>
                <h2 className={`${parentStyle.h2} ${styles.h2Color}`}>Feel the Heat this Summer</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum, incidunt aspernatur tenetur blanditiis molestias? Simi lique animi mollitia vitae commodi.

                <div className={styles.comingSoon}>Coming Soon</div>
              </div>

            </div>
          </section>
          

        ) : 

        (
          <section className={`${parentStyle.section} ${styles.sectionbg}`}>
            <div className={parentStyle.maxWidthWrap}>
              
              <div className={parentStyle.landingText}>
                
                <h2 className={`${parentStyle.h2} ${styles.h2Color}`}>Feel the Heat this Summer</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum, incidunt aspernatur tenetur blanditiis molestias? Simi lique animi mollitia vitae commodi.

                <div className={styles.comingSoon}>Coming Soon</div>
              </div>

              <figure className={parentStyle.landingImage}>
                <img src={summerAdImage} alt="" />

              </figure>

            </div>
          </section>
        )
      }
      
    </Media>
  )
}

export default SummerAd