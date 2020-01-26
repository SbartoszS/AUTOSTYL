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
        // headerTop.classList.toogle('sliderBot');

        //animacja linkow
        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `menuListFade 0.5s ease forwards ${index/7 + 0.3}s`;
            }
        });
        //burger animacja
        burger.classList.toggle('menu__burger--toogle');
    });
}

navSlide();