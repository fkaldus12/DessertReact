import { useEffect } from "react";
import Header from "./components/Header";
import Slider from "./components/Silder";
import Image from "./components/Image";
import ImageText from "./components/ImageText";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Text from "./components/Text";
import Footer from "./components/Footer";

import { link } from "./utils/link";

const App = () => {
    useEffect(() => {
        return link();
    }, []);

    return (
        <>
            <Header />
            <Slider title="슬라이드 유형" />
            <Image
                title="프리미엄 케이크와 디저트를 만나보세요"
                subtitle="유러피언 디저트의 본질을 추구한 고급 원재료와 차별화된 레시피"
            />
            <ImageText title="이미지텍스트 유형" />
            <Card title="카페, 그 이상의 문화를 만들다" />
            <Banner title="배너 유형" />
            <Text title="텍스트 유형" />
            <Footer />
        </>
    );
};

export default App;
