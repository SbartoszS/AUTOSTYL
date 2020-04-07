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

$(document).ready(function () {
    $('.adv-wrapper').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        draggable: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,

                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});