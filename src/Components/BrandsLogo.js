import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";

const BrandsLogo = () => {
    return (
        <div className="brand-logos">
            <a href="/" className="btn btn-primary float-end">See More</a>
            <h1 className="title">
                Brands
            </h1>
            <hr />
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                breakpoints={{
                    576: {
                        // width: 576,
                        slidesPerView: 3,
                    },
                    992: {
                        // width: 768,
                        slidesPerView: 6,
                    },
                }}
                slidesPerView={2}
                navigation={true}
                className="brands"
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide>
                    <a href="/">
                        <Image
                            src='/images/brands/brand-kfc.png'
                            alt='Brand KFC'
                            className='brand-image'
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/">
                        <Image
                            src='/images/brands/brand-dominos.png'
                            alt='Brand Dominos'
                            className='brand-image'
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/">
                        <Image
                            src='/images/brands/brand-mcdonalds.png'
                            alt='Brand McDonalds'
                            className='brand-image'
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/">
                        <Image
                            src='/images/brands/brand-pizza-hut.png'
                            alt='Brand Pizza Hut'
                            className='brand-image'
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/">
                        <Image
                            src='/images/brands/brand-pizza.jpg'
                            alt='Brand Pizza'
                            className='brand-image'
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/">
                        <Image
                            src='/images/brands/brand-pizza-hut.png'
                            alt='Brand Pizza Hut'
                            className='brand-image'
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/">
                        <Image
                            src='/images/brands/brand-kfc.png'
                            alt='Brand KFC'
                            className='brand-image'
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/">
                        <Image
                            src='/images/brands/brand-dominos.png'
                            alt='Brand Dominos'
                            className='brand-image'
                        />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BrandsLogo;