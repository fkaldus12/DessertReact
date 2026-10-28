import React from "react";
import { imageData } from "../data/imageData";

const Image = () => {
    return (
        <section id="imageType">
            <div className="container">
                <div className="hover_wrap">
                    <div className="txt">
                        <h1 className="bld">
                            프리미엄 케이크와 디저트를 만나보세요.
                        </h1>
                        <p>
                            유러피언 디저트의 본질을 추구한 고급 원재료와
                            차별화된 레시피
                        </p>
                    </div>
                    <div className="hover_inner">
                        {imageData.map((image, idx) => (
                            <figcaption className={image.class} key={idx}>
                                <div className="desc">
                                    <h2>{image.title}</h2>
                                    <p>{image.desc}</p>
                                    <div className="imageButton">
                                        <a href="/">자세히 보기</a>
                                    </div>
                                </div>
                            </figcaption>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Image;
