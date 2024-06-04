import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';
import "../assets/swiper.css"

const MySwiper = () => {
  return (
    <div className='hero-right-image'>
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
    
      navigation={false}
      pagination={false}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src='images/web-mock-01.jpg' className='img-fluid rounded' alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/web-mock-02.jpg' className='img-fluid rounded' alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/web-mock-03.jpg' className='img-fluid rounded' alt="Slide 3" />
      </SwiperSlide>
     
    </Swiper>
    </div>


  );
};

export default MySwiper;
