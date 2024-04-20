import React from 'react'

import ImgLogo from '../../images/Lucid_Icon.png';
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const categoryHandler = document.getElementsByClassName('container');
        if (window.scrollY > 100) {
            header.style.top = '0'; // 스크롤이 일정 이상 내려갈 때 헤더를 상단으로 이동
        } else {
            header.style.top = '25px';

        }
    });

    // useEffect(() => {

    // }, []);

    return (
        <div className='wrap_header'>
            <div className='header'>
                <div className='header_logo'>
                    <img src={ImgLogo} width={110} />
                    <label>&nbsp;Lucid Tarot</label>
                </div>
            </div>
            <div className="container">
                <div className="category-menu">
                    <div className="category-item">
                        <div className="category-link">
                            <a href="/">Horoscope Today</a>
                        </div>
                        <div className="dropdown-menu">
                            <a href="/">Friend</a>
                            <a href="/">Love</a>
                            <a href="/">Money</a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-link">
                            <a href="/">My Tarot</a>
                        </div>
                        <div className="dropdown-menu">
                            <a href="/">My Record</a>
                            <a href="/">Profile</a>
                            <a href="/">Edit</a>
                        </div>
                    </div>
                    <div className="category-item">
                        <a href="/">Info</a>
                    </div>
                    <div className="category-item">
                        <a href="/">Developer</a>
                    </div>
                    <div className="category-item">
                        <a href="/">ETC.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header