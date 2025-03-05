gsap.registerPlugin(ScrollTrigger)

// 섹션1 애니메이션
const section1Items = gsap.utils.toArray(".section1 .section1-slider ul li");
gsap.to(section1Items, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none restart none",
        // markers: true,
    },
});

// 섹션2 애니메이션
const section2Items = gsap.utils.toArray(".section2 .section2-slider ul li");
gsap.to(section2Items, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".section2",
        start: "center 80%",
        end: "bottom 20%",
        toggleActions: "play none restart none",
        // markers: true,
    },
});


// 섹션3 애니메이션
const section3Items = gsap.utils.toArray(".section3 .qna-box > ul > li");
gsap.to(section3Items, {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".section3", 
        start: "center 80%", 
        end: "bottom 20%",
        toggleActions: "play none restart none",
        // markers: true,
    },
});

// 섹션4 애니메이션

// h2 애니메이션
gsap.to(".section4 h2", {
    y: 0, 
    opacity: 1, 
    duration: 1,
    scrollTrigger: {
        trigger: ".section4", 
        start: "top 80%", 
        end: "center center",
        toggleActions: "play none restart none",  
        // markers: true,
  }
});

// li 애니메이션 
const section4Items = gsap.utils.toArray(".section4 ul li");
gsap.to(section4Items, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.1, 
    scrollTrigger: {
        trigger: ".section4", 
        start: "top 80%", 
        end: "center center",
        toggleActions: "play none restart none",
        // markers: true,
  },
});
