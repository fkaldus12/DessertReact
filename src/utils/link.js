// 헤더 메뉴를 클릭하면 해당 영역으로 부드럽게 이동합니다.
export const link = () => {
    const links = document.querySelectorAll(".header_nav ul li a");

    const handleClick = (event) => {
        const href = event.currentTarget.getAttribute("href");
        if (!href || !href.startsWith("#") || href === "#") return;

        const target = document.getElementById(href.slice(1));
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    };

    links.forEach((anchor) => {
        anchor.addEventListener("click", handleClick);
    });

    return () => {
        links.forEach((anchor) => {
            anchor.removeEventListener("click", handleClick);
        });
    };
};
