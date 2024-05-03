import React from 'react';

import {Pagination, Scrollbar} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Promotion = () => {
    return (
        <div className='promotion'>
            <h2 className='se2-title'>PROMOTION</h2>
            <div className='banner-row'>
                    <div className='promotion-banner'>
                        <div className='se2-banner-wrap'>
                            <div className='se2-banner first'></div>
                            <div className='banner-text'>
                                <p>FONTANA ARTE 10%</p>
                                <p>오랜 역사를 가진 이탈리아 조명 브랜드</p>
                            </div>
                        </div>
                        <div className='product-wrap'>
                            <div className='promotion-product'>
                                <div className='img-wrap'>
                                    <div className="img"></div>
                                    <div className="img"></div>
                                    <div className="img"></div>
                                    <div className="img"></div>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>FONTANA ARTE</p>
                                    <p className='imgText'>Bilia Mini Black</p>
                                    <p className='imgText'>KRW 621,100</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>FONTANA ARTE</p>
                                    <p className='imgText'>Tropico Medium</p>
                                    <p className='imgText'>KRW 1,773,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>FONTANA ARTE</p>
                                    <p className='imgText'>Cheshire Table</p>
                                    <p className='imgText'>KRW 774,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>FONTANA ARTE</p>
                                    <p className='imgText'>Cheshire Pendant</p>
                                    <p className='imgText'>KRW 774,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='promotion-banner'>
                        <div className='se2-banner-wrap'>
                            <div className='se2-banner second'></div>
                            <div className='banner-text'>
                                <p>HPIX NEW BRAND, NEW WORKS</p>
                                <p>조각적인 형태와 정직한 재료의 매혹</p>
                            </div>
                        </div>
                        <div className='product-wrap'>
                            <div className='promotion-product'>
                                <div className='img-wrap'>
                                    <div className="img second"></div>
                                    <div className="img second"></div>
                                    <div className="img second"></div>
                                    <div className="img second"></div>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>NEW WORKS</p>
                                    <p className='imgText'>Bukowski Chair Oak</p>
                                    <p className='imgText'>KRW 2,170,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>NEW WORKS</p>
                                    <p className='imgText'>Atlas Coffee Table 82x82 Oak</p>
                                    <p className='imgText'>KRW 3,300,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>NEW WORKS</p>
                                    <p className='imgText'>Kizu Table Lamp Small-5colors</p>
                                    <p className='imgText'>KRW 590,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>NEW WORKS</p>
                                    <p className='imgText'>Covent Sofa Deep 2 Seater</p>
                                    <p className='imgText'>KRW 5,200,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='promotion-banner'>
                        <div className='se2-banner-wrap'>
                            <div className='se2-banner third'></div>
                            <div className='banner-text'>
                                <p>12개월 무이자 할부</p>
                                <p>에이치픽스 인기브랜드 무이자 12개월</p>
                            </div>
                        </div>
                        <div className='product-wrap'>
                            <div className='promotion-product'>
                                <div className='img-wrap'>
                                    <div className="img third"></div>
                                    <div className="img third"></div>
                                    <div className="img third"></div>
                                    <div className="img third"></div>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>BOLIA</p>
                                    <p className='imgText'>Bowie Armchair - 3color</p>
                                    <p className='imgText'>KRW 6,390,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>BOLIA</p>
                                    <p className='imgText'>&#91;Open Collab&#93; F51 Armchair - Kvadrat 0764</p>
                                    <p className='imgText'>KRW 8,360,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>SPECTRUM</p>
                                    <p className='imgText'>BR 02.7 Sofa Bed - Olive&Ecru</p>
                                    <p className='imgText'>KRW 10,360,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>TECTA</p>
                                    <p className='imgText'>M21-1/M21 Dining, Conference</p>
                                    <p className='imgText'>KRW 7,680,000</p>
                                </div>
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
                    <div className='promotion-banner'>
                        <div className='se2-banner-wrap'>
                            <div className='se2-banner first'></div>
                            <div className='banner-text'>
                                <p>FONTANA ARTE 10%</p>
                                <p>오랜 역사를 가진 이탈리아 조명 브랜드</p>
                            </div>
                        </div>
                        <div className='product-wrap'>
                            <div className='promotion-product'>
                                <div className='img-wrap'>
                                    <div className="img"></div>
                                    <div className="img"></div>
                                    <div className="img"></div>
                                    <div className="img"></div>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>FONTANA ARTE</p>
                                    <p className='imgText'>Bilia Mini Black</p>
                                    <p className='imgText'>KRW 621,100</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>FONTANA ARTE</p>
                                    <p className='imgText'>Tropico Medium</p>
                                    <p className='imgText'>KRW 1,773,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>FONTANA ARTE</p>
                                    <p className='imgText'>Cheshire Table</p>
                                    <p className='imgText'>KRW 774,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>FONTANA ARTE</p>
                                    <p className='imgText'>Cheshire Pendant</p>
                                    <p className='imgText'>KRW 774,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='second-slide'>
                    <div className='promotion-banner'>
                        <div className='se2-banner-wrap'>
                            <div className='se2-banner second'></div>
                            <div className='banner-text'>
                                <p>HPIX NEW BRAND, NEW WORKS</p>
                                <p>조각적인 형태와 정직한 재료의 매혹</p>
                            </div>
                        </div>
                        <div className='product-wrap'>
                            <div className='promotion-product'>
                                <div className='img-wrap'>
                                    <div className="img second"></div>
                                    <div className="img second"></div>
                                    <div className="img second"></div>
                                    <div className="img second"></div>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>NEW WORKS</p>
                                    <p className='imgText'>Bukowski Chair Oak</p>
                                    <p className='imgText'>KRW 2,170,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>NEW WORKS</p>
                                    <p className='imgText'>Atlas Coffee Table 82x82 Oak</p>
                                    <p className='imgText'>KRW 3,300,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>NEW WORKS</p>
                                    <p className='imgText'>Kizu Table Lamp Small-5colors</p>
                                    <p className='imgText'>KRW 590,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>NEW WORKS</p>
                                    <p className='imgText'>Covent Sofa Deep 2 Seater</p>
                                    <p className='imgText'>KRW 5,200,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='third-slide'>
                    <div className='promotion-banner'>
                        <div className='se2-banner-wrap'>
                            <div className='se2-banner third'></div>
                            <div className='banner-text'>
                                <p>12개월 무이자 할부</p>
                                <p>에이치픽스 인기브랜드 무이자 12개월</p>
                            </div>
                        </div>
                        <div className='product-wrap'>
                            <div className='promotion-product'>
                                <div className='img-wrap'>
                                    <div className="img third"></div>
                                    <div className="img third"></div>
                                    <div className="img third"></div>
                                    <div className="img third"></div>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>BOLIA</p>
                                    <p className='imgText'>Bowie Armchair - 3color</p>
                                    <p className='imgText'>KRW 6,390,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>BOLIA</p>
                                    <p className='imgText'>&#91;Open Collab&#93; F51 Armchair - Kvadrat 0764</p>
                                    <p className='imgText'>KRW 8,360,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>SPECTRUM</p>
                                    <p className='imgText'>BR 02.7 Sofa Bed - Olive&Ecru</p>
                                    <p className='imgText'>KRW 10,360,000</p>
                                </div>
                                <div className="text-wrap">
                                    <p className='imgText'>TECTA</p>
                                    <p className='imgText'>M21-1/M21 Dining, Conference</p>
                                    <p className='imgText'>KRW 7,680,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Promotion;