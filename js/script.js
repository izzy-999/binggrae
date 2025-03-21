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



// DOM 요소 선택
const menuTrigger = document.querySelector(".hamberger");
const close = document.querySelector(".hamberger-menu .top.mobile .close");
const mask = document.querySelector(".layer-mask");
const hambergerMenu = document.querySelector(".hamberger-menu");
const nav = document.querySelector("header .bottom nav");
const body = document.querySelector("body");
const hambergerMenuList = document.querySelectorAll(".hamberger-menu .container .nav > ul > li");

// depth2 높이 업데이트 함수
function updateDepth2Height(forceOpen = false) {
    hambergerMenuList.forEach((item) => {
        const depth2 = item.querySelector(".depth2");
        if (depth2) {
            if (forceOpen && window.innerWidth > 1024) {
                depth2.style.height = "100%"; // 강제로 100% 설정
            } else if (depth2.style.height !== "0px" && depth2.style.height !== "") {
                depth2.style.height = window.innerWidth > 1024 ? "100%" : `${depth2.scrollHeight}px`;
            }
        }
    });
}

// 햄버거 메뉴 열기
menuTrigger.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    event.currentTarget.classList.toggle("checked");

    if (menuTrigger.classList.contains("checked")) {
        hambergerMenu.classList.add("active");
        mask.classList.add("on");
        body.style.overflow = "hidden";
        nav.style.display = "block"; // 메뉴 열릴 때 nav 표시
        updateDepth2Height(true); // 메뉴 열릴 때 depth2 높이 설정
    } else {
        closeMenu();
    }
});

// 메뉴 항목 클릭 이벤트
hambergerMenuList.forEach(function (navItem) {
    navItem.addEventListener("click", function () {
        const depth2 = this.querySelector(".depth2");

        // 모든 depth2를 먼저 닫음
        hambergerMenuList.forEach((item) => {
            const otherDepth2 = item.querySelector(".depth2");
            if (otherDepth2 !== depth2) {
                otherDepth2.style.height = "0px";
            }
        });

        // 클릭된 항목의 depth2를 토글
        if (depth2.style.height === "0px" || depth2.style.height === "") {
            depth2.style.height = window.innerWidth > 1024 ? "100%" : `${depth2.scrollHeight}px`;
        } else {
            depth2.style.height = "0px";
        }
    });
});

// 햄버거 메뉴 닫기
close.addEventListener("click", closeMenu);
mask.addEventListener("click", closeMenu);

function closeMenu() {
    hambergerMenu.classList.remove("active");
    mask.classList.remove("on");
    body.style.overflow = "auto";
    menuTrigger.classList.remove("active", "checked");

    // 모든 depth2를 초기화 (닫기)
    hambergerMenuList.forEach((item) => {
        const depth2 = item.querySelector(".depth2");
        if (depth2) {
            depth2.style.height = "0px";
        }
    });

    // 현재 화면 크기에 따라 nav 표시 여부 결정
    if (window.innerWidth > 1024) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

// 창 크기 변경 시 처리
window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        nav.style.display = "block";
        if (hambergerMenu.classList.contains("active")) {
            updateDepth2Height(true); // 메뉴가 열려 있으면 높이 업데이트
        }
    } else if (!menuTrigger.classList.contains("checked")) {
        nav.style.display = "none";
    } else {
        updateDepth2Height(); // 모바일 크기에서 열린 상태 유지
    }
});

// 페이지 로드 시 초기 설정
window.addEventListener("load", () => {
    if (window.innerWidth > 1024) {
        nav.style.display = "block";
        updateDepth2Height(true); // 새로고침 시 depth2 높이 100%
    } else {
        nav.style.display = "none";
    }
});

const langBtn = document.querySelector(".lang > a");
const langList = document.querySelector(".lang .lang-op");

langBtn.addEventListener("click", () => {
    if (langList.classList.contains("active")) {
        langList.style.height = "0"; // 닫힐 때 높이를 0으로
        langList.classList.remove("active");
    } else {
        langList.classList.add("active");
        langList.style.height = 80 + "px"; // 열릴 때 높이를 80px로
    }
});