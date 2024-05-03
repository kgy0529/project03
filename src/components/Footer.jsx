import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className="fnb-wrap">
                    <div className="fnb-list">
                        <div className="footer-service">
                            <h4>CUSTOMER CARE</h4>
                            <ul>
                                <li>02-3461-0172</li>
                                <li>Weekdays 13:00-18:00</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="footer-service">
                            <h4>INFO</h4>
                            <ul>
                                <li>STORE INFO</li>
                                <li>ABOUT</li>
                                <li>STYLING SERVICE</li>
                            </ul>
                        </div>
                        <div className="footer-service">
                            <h4>INFORMATION</h4>
                            <ul>
                                <li>멤버쉽 혜택</li>
                                <li>공지사항</li>
                                <li>리뷰</li>
                            </ul>
                        </div>
                        <div className="footer-service">
                            <h4>CONTACT</h4>
                            <ul>
                                <li>입점문의</li>
                                <li>B2B/프로젝트</li>
                                <li>1:1 문의</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-service">
                        <div className="newsletter-service">
                            <h4>가입하고 프로모션/최신정보 받기</h4>
                            <div className="stb_subscribe">
                                <form action="#" className='stb_form'>
                                    <fieldset className='stb_form_set'>
                                        <label htmlFor="stb-name" className='stb_form_set_label'>이름</label>
                                        <input type="text" className='stb_form_input' name="name" placeholder="이름"/>
                                        <div className='stb_form_msg_error'>
                                            <br />이름<br />을 입력하세요.
                                        </div>
                                    </fieldset>
                                    <fieldset className='stb_form_set'>
                                        <label htmlFor="stb-email" className='stb_form_set_label'>이메일</label>
                                        <input type="text" className='stb_form_input' name="email" placeholder="이메일"/>
                                        <div className='stb_form_msg_error'>
                                            잘못된 이메일 주소입니다.
                                        </div>
                                    </fieldset>
                                    <fieldset className='stb-form-submit'>
                                        <button type='submit' className='stb_form_submit_btn'>SUBSCRIBE</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        <div className="mobile-sns">
                            <ul className='follow-menu'>
                                <li className='sns-insta'>INSTAGRAM</li>
                                <li className='sns-facebook'>FACEBOOK</li>
                                <li className='sns-youtube'>YOUTUBE</li>
                                <li className='sns-blog'>NAVER BLOG</li>
                                <li className='sns-ppp'>PROMPT PROJECT</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-info">
                    <dl className='info-list'>
                            <div className='d-flex'>
                                <dd>주식회사 에이치픽스</dd>
                                <dt>대표</dt>
                                <dd>박인혜</dd>
                            </div>
                            <div className="d-flex">
                                <div className='d-flex'>
                                    <dt>주소</dt>
                                    <dd>서울특별시 강남구 개포로17길 28 (개포동) 1층</dd>
                                </div>
                                <div className='d-flex'>
                                    <dt>이메일</dt>
                                    <dd className='underline'>info@hpix.co.kr</dd>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className='d-flex'>
                                    <dt>사업자등록번호</dt>
                                    <dd>521-87-01623</dd>
                                    <dd className='underline'>사업자정보확인</dd>
                                </div>
                                <div className='d-flex'>
                                    <dt>통신판매업번호</dt>
                                    <dd>제 2020-서울강남-00134 호</dd>
                                    <dd className='underline'>구매안전서비스확인증</dd>
                                </div>
                            </div>
                            <div className="d-flex final">
                                <dd>ABOUT</dd>
                                <dd>TERMS OF USE</dd>
                                <dd>PRIVACY POLICY</dd>
                                <dd className='HPIX'>&copy; HPIX</dd>
                            </div>
                    </dl>
                </div>
            </div>
        </footer>
    );
};

export default Footer;