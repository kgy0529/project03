import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom'

//img
import Logo from '../img/logo.svg'
import search from '../img/icon_search2.svg'
import cart from '../img/icon_cart.svg'
import accont from '../img/icon_accont.svg'
import menu from '../img/icon_menu2.svg'
import searchBtn from '../img/icon_search.svg'

const Navbar = () => {
    const [activeBtn, setActiveBtn] = useState(null);
    const handleClick = (btnName) => {
        setActiveBtn(btnName === activeBtn ? null : btnName);
    };
    // 메뉴클릭
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuIconClick = () =>{
        setIsMenuOpen(true);
    };
    const handleCloseButtonClick = () =>{
        setIsMenuOpen(false);
    };
    //카트 클릭
    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleCartIconClick = () =>{
        setIsCartOpen(true);
    };
    const handleCloseButtonClick2 = () =>{
        setIsCartOpen(false);
    }
    //서치 클릭
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const handleSearchIconClick = () =>{
        setIsSearchOpen(true);
    };
    const handleCloseButtonClick3 = () =>{
        setIsSearchOpen(false);
    }
    
    //side-modal-bg 활성화
    const sideModalBgStyle = {
        opacity: isMenuOpen ? '1' : '0'
    };
    
    return (
        <div className='nav'>
            <aside className='header-notice'>
                <div className='notice'>
                    <Link to="/">회원가입 10% 쿠폰 / 45만원 쿠폰팩</Link>
                </div>
            </aside>
            <div id='header-start'>
                    <div className='fixed header'>
                        <div className='container'>
                            <div className='d-flex header-wrap'>
                                <h1 className='logo'>
                                    <Link to="/"><img src={Logo} alt="HPIX Logo" /></Link>
                                </h1>
                                <ul className='menu'>
                                    <li className='lnb-item'>NEW</li>
                                    <li className='lnb-item'>INSTOCK</li>
                                    <li className='lnb-item'>FURNITURE</li>
                                    <li className='lnb-item'>LIGHTING</li>
                                    <li className='lnb-item'>FABRICS</li>
                                    <li className='lnb-item'>ACCESSORIES</li>
                                    <li className='lnb-item'>ART</li>
                                    <li className='lnb-item'>PROMOTION</li>
                                    <li className='lnb-item'>OUTLET</li>
                                    <li className='lnb-item'>BRAND</li>
                                </ul>
                                <div className='util'>
                                    <button className='side-modal-btn util-menu' onClick={handleSearchIconClick}>
                                        <img src={search} alt="searchIcon" />
                                    </button>
                                    <div className='cart'>
                                        <button className='cart-btn util-menu' onClick={handleCartIconClick}>
                                            <img src={cart} alt="cartIcon" />
                                            &nbsp;
                                            <span className='cart-count'>0</span>
                                            <span className='displaynone'>0</span>
                                        </button>
                                    </div>
                                    <button className='accont util-menu'>
                                        <NavLink to="/login" >
                                            <img src={accont} alt="accontIcon"/>
                                        </NavLink>
                                    </button>
                                    <button className='menuIcon util-menu' onClick={handleMenuIconClick}>
                                        <img src={menu} alt="menuIcon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 메뉴 버튼 클릭 시 나옴*/}
                        <nav className='navi-wrap' style={{right:isMenuOpen ? "0":'-100%', transition:'right .3s ease-in-out'}}>
                            <div className='container'>
                                <div className='d-flex'>
                                    <button className='close-btn' type='button' onClick={handleCloseButtonClick}>CLOSE</button>
                                        <ul className='gnb-list depth2'>
                                            <li className='gnb-item'>
                                                <h4>SHOP</h4>
                                                <ul className='lnb-listWrap shop'>
                                                    <li><button className={`lnb-btn ${activeBtn === 'NEW' ? 'active' : ''}`} onClick={() => handleClick('NEW')}>NEW</button>
                                                        <ul className={`lnb-list depth3 ${activeBtn === 'NEW' ? 'active' : ''}`} style={{ display: activeBtn === 'NEW' ? 'block' : 'none' }}>
                                                            <li className='lnb-item'>ALL</li>
                                                            <li className='lnb-item'>NEW FURNITURE</li>
                                                            <li className='lnb-item'>NEW LIGHTING</li>
                                                            <li className='lnb-item'>NEW ACCESSORIES</li>
                                                        </ul>
                                                    </li>
                                                    <li><button className={`lnb-btn ${activeBtn === 'INSTOCK' ? 'active' : ''}`} onClick={() => handleClick('INSTOCK')}>INSTOCK</button>
                                                        <ul className={`lnb-list depth3 ${activeBtn === 'INSTOCK' ? 'active' : ''}`} style={{ display: activeBtn === 'INSTOCK' ? 'block' : 'none' }}>
                                                            <li className='lnb-item'>ALL</li>
                                                            <li className='lnb-item'>FURNITURE</li>
                                                            <li className='lnb-item'>LIGHTING</li>
                                                            <li className='lnb-item'>ACCESSORIES</li>
                                                        </ul>
                                                    </li>
                                                    <li><button className={`lnb-btn ${activeBtn === 'FURNITURE' ? 'active' : ''}`} onClick={() => handleClick('FURNITURE')}>FURNITURE</button>
                                                        <ul className={`lnb-list depth3 ${activeBtn === 'FURNITURE' ? 'active' : ''}`} style={{ display: activeBtn === 'FURNITURE' ? 'block' : 'none' }}>
                                                            <li className='lnb-item'>ALL</li>
                                                            <li className='lnb-item'>SOFAS</li>
                                                            <li className='lnb-item'>CHAIRS</li>
                                                            <li className='lnb-item'>BENCHES & STOOLS</li>
                                                            <li className='lnb-item'>TABLES</li>
                                                            <li className='lnb-item'>STORAGE</li>
                                                            <li className='lnb-item'>BEDS</li>
                                                            <li className='lnb-item'>ROOM DIVDERS</li>
                                                        </ul>
                                                    </li>
                                                    <li><button className={`lnb-btn ${activeBtn === 'LIGHTING' ? 'active' : ''}`} onClick={() => handleClick('LIGHTING')}>LIGHTING</button>
                                                        <ul className={`lnb-list depth3 ${activeBtn === 'LIGHTING' ? 'active' : ''}`} style={{ display: activeBtn === 'LIGHTING' ? 'block' : 'none' }}>
                                                            <li className='lnb-item'>ALL</li>
                                                            <li className='lnb-item'>PENDANT LAMPS</li>
                                                            <li className='lnb-item'>TABLE LAMPS</li>
                                                            <li className='lnb-item'>FLOOR LAMPS</li>
                                                            <li className='lnb-item'>WALL LAMPS</li>
                                                        </ul>
                                                    </li>
                                                    <li><button className={`lnb-btn ${activeBtn === 'FABRICS' ? 'active' : ''}`} onClick={() => handleClick('FABRICS')}>FABRICS</button>
                                                        <ul className={`lnb-list depth3 ${activeBtn === 'FABRICS' ? 'active' : ''}`} style={{ display: activeBtn === 'FABRICS' ? 'block' : 'none' }}>
                                                            <li className='lnb-item'>ALL</li>
                                                            <li className='lnb-item'>RUGS</li>
                                                            <li className='lnb-item'>BEDDINGS</li>
                                                        </ul>
                                                    </li>
                                                    <li><button className={`lnb-btn ${activeBtn === 'ACCESSORIES' ? 'active' : ''}`} onClick={() => handleClick('ACCESSORIES')}>ACCESSORIES</button>
                                                        <ul className={`lnb-list depth3 ${activeBtn === 'ACCESSORIES' ? 'active' : ''}`} style={{ display: activeBtn === 'ACCESSORIES' ? 'block' : 'none' }}>
                                                            <li className='lnb-item'>ALL</li>
                                                            <li className='lnb-item'>MIRRORS</li>
                                                            <li className='lnb-item'>MOBILES</li>
                                                            <li className='lnb-item'>ELECTRONICS</li>
                                                            <li className='lnb-item'>DESIGN BOOKS</li>
                                                            <li className='lnb-item'>OBJECTS</li>
                                                            <li className='lnb-item'>VASES</li>
                                                            <li className='lnb-item'>FRAGRANCES</li>
                                                            <li className='lnb-item'>TABLEWARE</li>
                                                            <li className='lnb-item'>BASKETS & TRASH BINS</li>
                                                            <li className='lnb-item'>HOOK & HANGERS</li>
                                                        </ul>
                                                    </li>
                                                    <li><button className={`lnb-btn ${activeBtn === 'ART' ? 'active' : ''}`} onClick={() => handleClick('ART')}>ART</button>
                                                        <ul className={`lnb-list depth3 ${activeBtn === 'ART' ? 'active' : ''}`} style={{ display: activeBtn === 'ART' ? 'block' : 'none' }}>
                                                            <li className='lnb-item'>ALL</li>
                                                            <li className='lnb-item'>FURNITURE</li>
                                                            <li className='lnb-item'>OBJECT</li>
                                                        </ul>
                                                    </li>
                                                    <li className='gnb-list navPromotion'>PROMOTION</li>
                                                    <li className='gnb-list'>OUTLET</li>
                                                    <li className='gnb-list'>BRAND</li>
                                                    <li className='gnb-list'>HPIX STORY</li>
                                                </ul>
                                                <ul className='gnb-list mypage'>
                                                    <li className='gnb-item'>LOGIN</li>
                                                    <li className='gnb-item'>WISHLIST&#40;<span>0</span>&#41;</li>
                                                </ul>
                                            </li>
                                        </ul>

                                </div>
                            </div>
                        </nav>
                        {/* 카트 버튼 클릭 시 나옴 */}
                        <div className='side-modal-wrap sm-wrap-cart' style={{right:isCartOpen ? "0":'-100%', transition:'right .3s ease-in-out'}} >
                            <div className='container'>
                                <div className='d-flex'>
                                    <button className='close-btn' type='button' onClick={handleCloseButtonClick2}>CLOSE</button>
                                </div>
                                <div className='blank-cart'><p>장바구니가 비어 있습니다.</p></div>
                                {/* <iframe src="/" frameborder="0" width="100%" height="auto"></iframe> 원래는 선택한 상품이 들어가야함 */} 
                                <div className='btn-wrap'>
                                    <button className='btn-cart'>장바구니 보기</button>
                                </div>
                            </div>
                        </div>
                        {/* 서치 버튼 클릭 시 나옴 */}
                        <div className='side-modal-wrap sm-wrap-search' style={{right:isSearchOpen ? "0":'-100%', transition:'right .3s ease-in-out'}}>
                            <div className='container'>
                                <div className='d-flex'>
                                    <button className='close-btn' type='button' onClick={handleCloseButtonClick3}>CLOSE</button>
                                </div>
                                <form action="/" id='searchBarForm'>
                                    <input type="text" id="keyword" name="keyword" placeholder='SEARCH'/>
                                    <input type="image" id='searchBtn' name="searchBtn" src={searchBtn}/>
                                </form>
                                <div className='keyWord-wrap'>
                                    <p className='popular-keyWord'>POPULAR KEYWORDS</p>
                                    <ul className='keyWord-list'>
                                        <li className='keyWord-record'>PAPERBACK</li>
                                        <li className='keyWord-record'>M1-2</li>
                                        <li className='keyWord-record'>BR소파</li>
                                        <li className='keyWord-record'>프레스룸체어</li>
                                        <li className='keyWord-record'>IJHORST SIDE TABLE</li>
                                        <li className='keyWord-record'>다이닝체어</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className='side-modal-bg' style={{ display: isMenuOpen ? 'block' : 'none', opacity: isMenuOpen ? 1 : 0, transition: 'opacity 1s ease-in-out'}}></div>
                    </div>
            </div>
            
        </div>
    );
};

export default Navbar;