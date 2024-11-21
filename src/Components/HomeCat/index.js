
import React from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';



const HomeCat = ()=>{



    return (
       
        <section className="homeCat">
        <div className="container">
        <Swiper
        spaceBetween={0}
        slidesPerView={10}
        navigation={true}
        slidesPerGroup={1}
        modules={Navigation}
        className="mySwiper"
        >
        <SwiperSlide>
            
        </SwiperSlide>
        </Swiper>
        </div>
        </section>

    )

}

export default HomeCat;