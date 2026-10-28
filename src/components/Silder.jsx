import React from "react";

const Silder = () => {
    return (
        <section id="silder_type">
            <div className="swiper hero">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="s1">
                            <div className="container">
                                <div className="silde_01">
                                    <div className="silde_text">
                                        <span>DESSERT CAFE</span>
                                        <h1>DESSERT TRENDS</h1>
                                        <p>
                                            카페와 어울리는 세상의 모든 디저트를
                                            만나보세요!
                                            <br />
                                            공간의 분위기를 매력적으로 전환시켜
                                            줄거에요!
                                        </p>
                                    </div>
                                    <div className="silde_button">
                                        <a href="/">자세히 보기</a>
                                        <a href="/">사이트 보기</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img src="assets/img/slideImg.jpg" alt="" />
                    </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};

export default Silder;
