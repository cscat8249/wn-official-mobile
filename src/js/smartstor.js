document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.market_img_items', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop : true,
        mousewheel: {
            invert: true,
        },
        navigation: {
            nextEl: '.travel-swiper-right',
            prevEl: '.travel-swiper-left',
        },
        loop: true,
        autoplay: {
            delay: 3000,
        },
    });

    new Swiper('.smart_img_items', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loopFillGroupWithBlank : true,
	    loop : true, // 무한 반복
        autoplay: { // 자동 재생 여부
            delay: 3000 // 3초마다 슬라이드 바뀜
        },
        mousewheel: {
            invert: true,
        },
    });
});