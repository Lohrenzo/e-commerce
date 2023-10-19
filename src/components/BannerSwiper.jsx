import { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

import img1 from "../../assets/bucket-list-logo.jpg";
import img2 from "../../assets/94.jpg";

function BannerSwiper() {

    const [slides, setSlides] = useState(
        [
            {
                url: img1,
                description: 'Decorate your home with our appliances',
            },
            {
                url: img2,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis',
            },
        ]
    );


    return (
        <section className="p-0 top-0 lg:pt-[3.2rem]">
            <Swiper 
                // navigation={true} 
                loop={true} 
                autoplay={{delay: 3500, disableOnInteraction: false,}} 
                modules={[Navigation, Autoplay]} 
                className="swiper"
            >
                {...slides.map((slide, currentIndex) => (
                    <SwiperSlide 
                        style={{backgroundImage: `url(${slide.url})`}} 
                        key={currentIndex} className="slide"
                    >
                        {/* <h1 className="font-bold text-[2rem] text-center">{slide.description}</h1> */}
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </section>
    )
}

export default BannerSwiper;