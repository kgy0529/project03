import React from 'react';

import {Pagination, Scrollbar} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import {Link} from 'react-router-dom';

const Main = () => {
    return (
        <div className='main'>
            <div className='banner-row'>
                <div className='main-banner'>
                    <div className='banner-text'>
                        <p>BOLIA SPRING ACC ~17% OFF</p>
                        <p>안락함을 주는 디자인과 지속가능성</p>
                    </div>
                </div>
                <div className='main-banner'>
                    <div className='banner-text'>
                        <p>TROLLEYS 10% OFF + COUPON</p>
                        <p>단 하나의 아이템으로 공간을 바꾸는 트롤리</p>
                    </div>
                </div>
                <div className='main-banner'>
                    <div className='banner-text'>
                        <p>FURNITURE WEEK</p>
                        <p>가구 전제품 시크릿 쿠폰 발급</p>
                    </div>
                </div>
                <div className='main-banner'>
                    <div className='banner-text'>
                        <p>DISPLAYED & SEASON OFF ITEM</p>
                        <p>한정수량 UP TO 30%</p>
                    </div>
                </div>
            </div>

            <Swiper
            className='swiper'
            modules={[Pagination]}
            slidesPerView={1}
            navigation
            pagination={{
                type: 'fraction',
              }}
            scrollbar={{ draggable: true, el: '.custom-scrollbar' }}
            loop
            >
                <SwiperSlide className='first-slide'>
                    <div className='swiper-img swImg1'>
                        <div className='banner-text'>
                        <p>BOLIA SPRING ACC ~17% OFF</p>
                        <p>안락함을 주는 디자인과 지속가능성</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='second-slide'>
                    <div className='swiper-img swImg2'>
                        <div className='banner-text'>
                        <p>TROLLEYS 10% OFF + COUPON</p>
                        <p>단 하나의 아이템으로 공간을 바꾸는 트롤리</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='third-slide'>
                    <div className='swiper-img swImg3'>
                        <div className='banner-text'>
                            <p>FURNITURE WEEK</p>
                            <p>가구 전제품 시크릿 쿠폰 발급</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='fourth-slide'>
                    <div className='swiper-img swImg4'>
                        <div className='banner-text'>
                            <p>DISPLAYED & SEASON OFF ITEM</p>
                            <p>한정수량 UP TO 30%</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Main;