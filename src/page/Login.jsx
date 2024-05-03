import React from 'react';
import naver from '../img/icon_naver.svg';
import kakao from '../img/icon_kakao.svg';

const Login = () => {
    return (
        <div className='login'>
            <div className='contents'>
                <div className='page-account'>
                    <div className='row'>
                        <form action="/" id='login' name='login'>
                            <label htmlFor="userID">아이디</label>
                            <input type="text" id='userID' name='userID' placeholder='아이디를 입력하세요'/>
                            <label htmlFor="userPWD">비밀번호</label>
                            <input type="password" id='userPWD' name='userPWD' placeholder='비밀번호를 입력하세요'/>
                            <div className='id-save'>
                                <input type="checkbox" id='saveID'/>
                                <label htmlFor="saveID">아이디 저장</label>
                            </div>
                        <button className='login-btn'>로그인</button>
                        <ul className='user-find'>
                            <li>회원가입</li>
                            <li>아이디찾기</li>
                            <li>비밀번호찾기</li>
                        </ul>
                        <ul className='platform-login'>
                            <li><img src={naver} alt="naver icon" /><p>네이버 로그인</p></li>
                            <li><img src={kakao} alt="kakao icon" /><p>카카오 로그인</p></li>
                        </ul>
                        <button className='guestOrder-btn'>비회원주문조회</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;