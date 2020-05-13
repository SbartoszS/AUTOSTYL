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

function initMap() {
    var uluru = {
        lat: 50.06670,
        lng: 22.047537
    };

    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 17,
            center: uluru
        });
    var contentString = 'Ul.Załęska 102, <br /> 35-322 Rzeszów <br /> Auto-styl Rzeszów';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 500
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}

//funkcja chowająca i pokazująca przycisk arrow po przewinięciu 100 px
$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('#return-top').fadeIn(200);
    } else {
        $('#return-top').fadeOut(200);
    }
});

//funcja click na przycisku skrolująca na początek strony
$('#return-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});