import bannerimg from "/banner/banner.png"
import Button from "../Button/Button"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import "./Banner.css"
export default function Banner(){
    return(
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><div className="banner">
                    <img src={bannerimg} alt="" />
                    <div className="banner-text">
                        <h1><span>Stan Smith</span>, <br />  Forever!</h1>
                        <Button href="/catalog" padding="40px" bradius="118px">КАТАЛОГ</Button>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="banner">
                    <img src={bannerimg} alt="" />
                    <div className="banner-text">
                        <h1><span>Stan Smith</span>, <br />  Forever!</h1>
                        <Button href="/catalog" padding="40px" bradius="118px">КАТАЛОГ</Button>
                    </div>
                    </div>
                </SwiperSlide>
        
      </Swiper>
        
        </>
    )
}