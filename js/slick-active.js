//Banner slider
$(document).ready(function () {
    $('.banner-wrapper').slick({
        infinite: true,
        autoplay: true,
        dots: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 5000,
        mobileFirst: true,
        fade: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 1024,
            settings: {
                draggable: false,
            }
        }],
    });
});