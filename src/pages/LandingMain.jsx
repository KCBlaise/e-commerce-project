import React from 'react';
import styles from "../sass/pages/LandingMain.module.scss";
import LandingFirstSection from '../components/LandingFirstSection';
import LandingSecondSection from '../components/LandingSecondSection';
import LandingThirdSection from '../components/LandingThirdSection';
import CategorySection from '../components/CategorySection';
import Newsletter from '../components/Newsletter';

const LandingMain = () => {
  return (
    <main className={styles.main}>
        <LandingFirstSection/>
        <LandingSecondSection/>
        <LandingThirdSection/>
        <CategorySection/>
        <Newsletter/>
    </main>
  )
}

export default LandingMain