import React from 'react';

import {Pagination, Scrollbar} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CurrentView = () => {
    return (
        <div className='currentview'>
            <h2>CURRENT VIEW</h2>
            <div className='banner-row'>
                <div className='currentView-banner'>
                    <div className='se3-banner-wrap'>
                        <div className='se3-banner'></div>
                        <div className='banner-text'>
                            <p>LIVING ROOM</p>
                            <p>SPECTRUM</p>
                            <p>PRESS ROOM CHAIR</p>
                        </div>
                    </div>
                    <div className='se3-banner-wrap'>
                        <div className='se3-banner second'></div>
                        <div className='banner-text second'>
                            <p>OFFICE ROOM</p>
                            <p>TECTA</p>
                            <p>M1 DINNG CONFERENCE, DESK</p>
                        </div>
                    </div>
                    <div className='se3-banner-wrap'>
                        <div className='se3-banner third'></div>
                        <div className='banner-text third'>
                            <p>DINNG ROOM</p>
                            <p>TECTA</p>
                            <p>D9 ARMCHAIR</p>
                        </div>
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
                        <div className='se3-banner-wrap'>
                            <div className='se3-banner'></div>
                            <div className='banner-text'>
                                <p>LIVING ROOM</p>
                                <p>SPECTRUM</p>
                                <p>PRESS ROOM CHAIR</p>
                            </div>
                         </div>
                </SwiperSlide>
                <SwiperSlide className='second-slide'>
                        <div className='se3-banner-wrap'>
                            <div className='se3-banner second'></div>
                            <div className='banner-text second'>
                                <p>OFFICE ROOM</p>
                                <p>TECTA</p>
                                <p>M1 DINNG CONFERENCE, DESK</p>
                            </div>
                         </div>
                </SwiperSlide>
                <SwiperSlide className='third-slide'>
                        <div className='se3-banner-wrap'>
                            <div className='se3-banner third'></div>
                            <div className='banner-text third'>
                                <p>DINNG ROOM</p>
                                <p>TECTA</p>
                                <p>D9 ARMCHAIR</p>
                            </div>
                        </div>
                </SwiperSlide>
            </Swiper>
            
        </div>
    );
};

export default CurrentView;