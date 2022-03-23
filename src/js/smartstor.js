document.addEventListener("DOMContentLoaded", function () {
    // $('img[usemap]').rwdImageMaps();

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
        slidesPerView: 3,
        spaceBetween: 24,
        loop : true,
        mousewheel: {
            invert: true,
        },
    });
});