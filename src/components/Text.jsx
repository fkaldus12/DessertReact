import React, { useEffect, useRef } from "react";
import { textData } from "../data/textData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Text = ({ title }) => {
    const textInner = useRef(null);
    const textRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                {
                    y: 300,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.2,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: textInner.current,
                        start: "top 80%",
                    },
                },
            );
        }, textInner);

        return () => ctx.revert();
    }, []);

    return (
        <section id="textType" className="section">
            <span>텍스트 유형</span>
            <h2>{title || "다채로운 베이커리 컬렉션"}</h2>

            <div className="container text_inner" ref={textInner}>
                {textData.map((text, idx) => (
                    <div
                        className={`txt t${text.id}`}
                        key={idx}
                        ref={(el) => {
                            textRef.current[idx] = el;
                        }}
                    >
                        <div className="txt_title">{text.title}</div>
                        <div className="txt_desc">{text.desc}</div>
                        <a href="/" className="text_btn">
                            더보기
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Text;
