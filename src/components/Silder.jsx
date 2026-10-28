import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "../data/slider";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Silder = ({ title }) => {
    return (
        <section id="silder_type">
            <Swiper
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
                className="hero"
            >
                {sliderData.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={slide.img} alt="" />
                        <div className="s1">
                            <div className="container">
                                <div className="silde_01">
                                    <div className="silde_text">
                                        <span>{slide.subtitle}</span>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.desc}</p>
                                    </div>
                                    <div className="silde_button">
                                        <a href="#">자세히 보기</a>
                                        <a href="#">사이트 보기</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Silder;
