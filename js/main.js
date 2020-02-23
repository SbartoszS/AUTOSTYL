const navSlide = () => {
    const burger = document.querySelector('.menu__burger');
    const nav = document.querySelector('.menu__list');
    const navLinks = document.querySelectorAll('.menu__item');
    const banner = document.querySelector('.banner');

    burger.addEventListener('click', () => {
        //zmiana burgera
        nav.classList.toggle('menu__list--active');
        //przemieszczenie pozostalych sekcji
        banner.classList.toggle('banner--moveBot');

        //animacja linkow
        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `menuListFade 0.3s ease forwards ${index/7 + 0.1}s`;
            }
        });
        //burger animacja
        burger.classList.toggle('menu__burger--toogle');
    });
}
navSlide();

$(document).ready(function () {

    $(".banner__btn").click(function () {
        let pos = $(".about").position();

        $('body,html').animate({
            scrollTop: pos.top,
        }, 1000);

    });

    $(window).on('scroll', function () {
        let pos = $(window).scrollTop() + 250;
        let pos1 = $('.about-info--first').offset().top + $('.about-info--first').outerHeight() - window.innerHeight;
        let pos2 = $('.about-info--second').offset().top + $('.about-info--first').outerHeight() - window.innerHeight;
        console.log(pos);
        console.log(pos1);
        if (pos >= pos1) {
            console.log($(window).scrollTop())
            console.log('You reached the end of the DIV');
            $(".about-info__img-wrap--first").addClass('about-active');
            $(".about-info__content--first").addClass('about-active');
        }
        if (pos >= pos2) {
            console.log($(window).scrollTop())
            console.log('You reached the end of the DIV');
            $(".about-info__img-wrap--second").addClass('about-active');
            $(".about-info__content--second").addClass('about-active');

        }

    });

});