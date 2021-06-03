$(function () {

    $('.catalog__input').ionRangeSlider({
        type: "double",
        onStart: function (data) {
            $('.catalog__text-from').text(data.from);
            $('.catalog__text-to').text(data.to);
        },
        onChange: function (data) {
            $('.catalog__text-from').text(data.from);
            $('.catalog__text-to').text(data.to);
        },
    })

    $('.myslider__inner').slick({
        dots: true,
        arrows: false
        // fade: true
        // autoplay: true,
        // autoplaySead: 2000;
    })


    $('.partners__list').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });




    // $('.footer-top__title').on('click', function () {
    //     $(this).next().slideToggle();
    //     $(this).toggleClass('footer-top__list--active');
    // });

    const containerProduct = document.querySelector('[data-ref="container-product"]');
    const containerDesign = document.querySelector('[data-ref="container-design"]');

    let config = {
        controls: {
            scope: 'local'
        }
    };

    let mixer1 = mixitup(containerProduct, config);
    let mixer2 = mixitup(containerDesign, config);

});

//burger menu

let burger = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu__list');

burger.addEventListener('click', function () {
    burger.classList.toggle('menu__btn--active');
    menu.classList.toggle('menu__list--active');
});

//fixed header

// const header = document.querySelector('.header');
// const headerWrap = document.querySelector('.header__wrap');
// const nav = document.querySelector('.nav');

// window.addEventListener('scroll', () => {

//     let scrollTop = window.scrollY;
//     let heightPart = headerWrap.offsetHeight;

//     if (scrollTop > heightPart) {

//         headerWrap.classList.add('header__fixed');
//         header.style.marginTop = heightPart + 'px';
//         nav.classList.add('nav__fixed');
//     } else {
//         headerWrap.classList.remove('header__fixed');
//         header.style.marginTop = '0px';
//         nav.classList.remove('nav__fixed');
//     }
// });