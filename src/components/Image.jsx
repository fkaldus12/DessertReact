import { useEffect, useRef } from "react";
import { imageData } from "../data/imageData";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Image = ({ title, subtitle }) => {
    const imageRef = useRef([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const media = gsap.matchMedia();
        media.add(
            "(prefers-reduced-motion: no-preference)",
            () => {
                gsap.from(imageRef.current, {
                    y: 80,
                    autoAlpha: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current.querySelector(".hover_inner"),
                        start: "top 85%",
                    },
                });
            },
            sectionRef,
        );

        return () => media.revert();
    }, []);

    return (
        <section id="imageType" ref={sectionRef}>
            <div className="container">
                <div className="hover_wrap">
                    <div className="txt">
                        <h1 className="bld">{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <div className="hover_inner">
                        {imageData.map((image, idx) => (
                            <figcaption
                                className={image.class}
                                key={idx}
                                ref={(el) => {
                                    imageRef.current[idx] = el;
                                }}
                            >
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
