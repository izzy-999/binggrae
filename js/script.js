document.addEventListener("DOMContentLoaded", function () {
    const swiper1 = new Swiper(".section1-slider", {
        slidesPerView: 3,
        loop: true,
        grid: {
            rows: 2,
            fill: "row",
        },
        slidesPerGroup: 1,
        spaceBetween: 18,
        navigation: {
            nextEl: ".section1-slider-wrap .swiper-button-next",
            prevEl: ".section1-slider-wrap .swiper-button-prev",
        },

        observer: true, // DOM 변화 감지
        observeParents: true, // 부모 요소 변화도 감지
        breakpoints: {
            768: {
                slidesPerView: 4,
                grid: { rows: 1 },
            },
            1024: {
                slidesPerView: 5,
                grid: { rows: 1 },
            },
            1280: {
                slidesPerView: 6,
                grid: { rows: 1 },
            },
        },
    });

    const swiper2 = new Swiper(".section2-slider", {
        slidesPerView: 3,
        loop: true,
        grid: {
            rows: 2,
            fill: "row",
        },
        slidesPerGroup: 1,
        spaceBetween: 18,
        navigation: {
            prevEl: ".section2-slider-wrap .swiper-button-prev",
            nextEl: ".section2-slider-wrap .swiper-button-next",
        },
        breakpoints: {
            // 768px 이상일 때
            768: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                },
            },
            // 1024px 이상일 때
            1024: {
                slidesPerView: 5,
                grid: {
                    rows: 1,
                },
            },
            // 1280px 이상일 때
            1280: {
                slidesPerView: 6,
                grid: {
                    rows: 1,
                },
            },
        },
    });
});

// header open
window.onload = function () {
    let header = document.querySelector(".header");
    let navList = document.querySelector(".nav > ul");
    let submenus = document.querySelectorAll(".submenu");

    navList.addEventListener("mouseover", () => {
        navList.querySelectorAll(".submenu").forEach((sub) => {
            sub.style.height = "364px";
            sub.style.transition = "all 0.8s ease";
        });
        header.classList.add("open");
        header.classList.remove("hide-after");
    });

    navList.addEventListener("mouseout", () => {
        navList.querySelectorAll(".submenu").forEach((sub) => {
            sub.style.height = "0px";
            sub.style.transition = "none";
        });
        header.classList.add("hide-after");
        header.classList.remove("open");
    });
};

// hamberger menu open
const menuTrigger = document.querySelector(".hamberger");
const close = document.querySelector(".hamberger-menu .top.mobile .close");
const mask = document.querySelector(".layer-mask");
const hambergerMenu = document.querySelector(".hamberger-menu");
const nav = document.querySelector("header .bottom nav");
const body = document.querySelector("body");

// 햄버거 메뉴 열기
menuTrigger.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    event.currentTarget.classList.toggle("checked");

    if (menuTrigger.classList.contains("checked")) {
        hambergerMenu.classList.add("active");
        mask.classList.add("on");
        body.style.overflow = "hidden";

        if (window.innerWidth <= 1024) {
            nav.style.display = "none";
        }
    } else {
        closeMenu();
    }
});

// 햄버거 메뉴 닫기
close.addEventListener("click", closeMenu);
mask.addEventListener("click", closeMenu);

function closeMenu() {
    hambergerMenu.classList.remove("active");
    mask.classList.remove("on");
    body.style.overflow = "auto";
    menuTrigger.classList.remove("active", "checked");

    // 현재 화면 크기에 따라 nav 표시 여부 결정
    if (window.innerWidth > 1024) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

// 창 크기 변경 시 nav 상태 업데이트
window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        nav.style.display = "block";
    } else if (!menuTrigger.classList.contains("checked")) {
        nav.style.display = "none";
    }
});

// header fixed
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        // 50px 이상 스크롤되면
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});
