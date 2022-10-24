import styles from '../sass/components/PageTemplate.module.scss';
import DisplayCard from '../components/DisplayCard';

const PageTemplate = ({ pageHeader, pageData }) => {
  return (
    <section className={styles.section}>
        <div className={styles.maxWidthWrap}>        
            <h3 className={styles.header}>{pageHeader}</h3>
            <div className={styles.displayGrid}>
                {pageData.map((product, index) => <DisplayCard product={product} key={index} />)}
            </div>
        </div>
    </section>
  )
}

export default PageTemplate