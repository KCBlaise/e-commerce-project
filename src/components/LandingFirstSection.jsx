import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/scss/pagination';
import styles from "../sass/components/LandingFirstSection.module.scss";
import DiscountOffer from './LandingFirstComponents/DiscountOffer';
import ShopMen from './LandingFirstComponents/ShopMen';
import SummerAd from './LandingFirstComponents/SummerAd';

const LandingFirstSection = () => {
  return (
    <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    speed={1000}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false
    }}
    loop
    slidesPerView={1}
    className={styles.landingSwiper}

    >
      <SwiperSlide><DiscountOffer parentStyle={styles}/></SwiperSlide>
      <SwiperSlide><ShopMen parentStyle={styles}/></SwiperSlide>
      <SwiperSlide><SummerAd parentStyle={styles}/></SwiperSlide>
    </Swiper>
    
  )
}

export default LandingFirstSection