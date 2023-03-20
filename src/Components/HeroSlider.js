import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";

const HeroSlider = () => {
    return(
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            className="hero-slider"
            navigation={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            loop={true}
        >
            <SwiperSlide>
                <Image
                    src='/images/slider-1.jpg' 
                    alt='Slider 1'
                    className='slider-image'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src='/images/slider-2.jpg' 
                    alt='Slider 2'
                    className='slider-image'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src='/images/slider-3.png'
                    alt='Slider 3'
                    className='slider-image'
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default HeroSlider;