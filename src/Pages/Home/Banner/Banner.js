import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../../../images/banner/dr9.jpg';
import banner2 from '../../../images/banner/dr4.jpg';
import banner3 from '../../../images/banner/dr5.png';

import './Banner.css';

const Banner = () => {
    const settings = {
        fade: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        cssEase: "linear",
    };
    return (
        <div >
            <Slider {...settings}>
                <div id="hero-section">
                    <div>
                        <img
                            className="img-fluid hero-bg-img"
                            src={banner1}
                            alt="First slide"
                        />
                    </div>
                    <div>
                        <img
                            className="img-fluid hero-bg-img"
                            src={banner2}
                            alt="First slide"
                        />
                    </div>
                    <div>
                        <img
                            className="img-fluid "
                            src={banner3}
                            alt="First slide"
                        />
                    </div>
                </div>
            </Slider>

        </div>
    );
};

export default Banner;