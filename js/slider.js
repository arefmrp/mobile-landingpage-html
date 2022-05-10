//slider
var swiper = new Swiper(".swiper", {


    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    loop:true,
    breakpoints: {
        460: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});
///slider

