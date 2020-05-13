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

        if (pos >= pos1) {
            $(".about-info__img-wrap--first").addClass('about-active');
            $(".about-info__content--first").addClass('about-active');
        }
        if (pos >= pos2) {
            $(".about-info__img-wrap--second").addClass('about-active');
            $(".about-info__content--second").addClass('about-active');

        }
    });

    let start = 0;
    let start2 = 0;
    let start3 = 0;
    let flagCount = false;

    function IncrementCount() {
        $('.num1js').text(start);
        start = start + 1;
        t = setTimeout(IncrementCount, 10);
        if (start === 26) {
            clearTimeout(t);
        }
    }

    function IncrementCount2() {
        $('.num2js').text(start2 + ' +');
        start2 = start2 + 2;
        c = setTimeout(IncrementCount2, 10);
        if (start2 >= 101) {
            clearTimeout(c);
        }
    }

    function IncrementCount3() {
        $('.num3js').text(start3 + ' +');
        start3 = start3 + 200;
        d = setTimeout(IncrementCount3, 10);
        if (start3 >= 10001) {
            clearTimeout(d);
        }
    }


    $(window).on('scroll', function () {
        let posStat = $(".statistic").position().top + $(".statistic").outerHeight(true) - 80;
        let log1 = $(window).scrollTop() + $(window).height();

        if (log1 >= posStat && !flagCount) {
            IncrementCount();
            IncrementCount2();
            IncrementCount3();
            flagCount = !flagCount;
        }
    });
});