$(function () {

    $('.myslider__inner').slick({
        dots: true,
        arrows: false
        // fade: true,
        // autoplay: true,
        // autoplaySead: 2000;
    })


    $('.partners__inner').slick({
        dots: false,
        arrows: false

    })

    // $('.footer-top__title').on('click', function () {
    //     $(this).next().slideToggle();
    //     $(this).toggleClass('footer-top__list--active');
    // });

    var containerProduct = document.querySelector('[data-ref="container-product"]');
    var containerDesign = document.querySelector('[data-ref="container-design"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerProduct, config);
    var mixer2 = mixitup(containerDesign, config);

});

let burger = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu__list');

burger.addEventListener('click', function () {
    burger.classList.toggle('menu__btn--active');
    menu.classList.toggle('menu__list--active');
});