$(function () {

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

let burger = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu__list');

burger.addEventListener('click', function () {
    burger.classList.toggle('menu__btn--active');
    menu.classList.toggle('menu__list--active');
});