// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {userHero1, userHero2, userHero3} from "../../assets/Images/userHero"

export default function Carousel() {
  return (
  <div className='mx-10 shadow-2xl shadow-gray-300 rounded-2xl text-white'>
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      centeredSlides={true}
      autoplay = {{
        delay: 2000,
        disableOnInteraction: false
      }}
      navigation = {true}
      pagination = {{
        clickable: true
      }}
      modules={[Autoplay, Navigation, Pagination]}
      className='mySwiper rounded-2xl w-full h-100'
    >
      <SwiperSlide>
        <div
        style={{backgroundImage: `url(${userHero1})`}} 
        className={`bg-cover bg-center w-full h-full p-5 flex flex-col justify-start`}>
        <h1 className='text-8xl font-semibold drop-shadow-2xl mt-10 '>Welcome Back, User!</h1>
        <h2 className='text-3xl font-medium ml-5 drop-shadow-2xl'>Hungry Again? Lets get you something delicious!😋</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
        style={{backgroundImage: `url(${userHero2})`}}
        className={`bg-cover bg-center w-full h-full p-5`}>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
        style={{backgroundImage: `url(${userHero3})`}}
        className={`bg-cover bg-center w-full h-full p-5`}>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  );
};