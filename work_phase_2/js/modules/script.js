var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },

        1280: {
            slidesPerView: 2.5,
            spaceBetween: 100,
        },

        1920: {
            slidesPerView: 2.5,
            spaceBetween: 100,
        }

    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
});
