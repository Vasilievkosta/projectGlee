$(function () {

    $('.select-styler').styler();

    $('.catalog__svg').on('click', function () {
        $('.catalog__svg').removeClass('catalog__svg--active');
        $(this).addClass('catalog__svg--active');
    });

    $('.catalog__btn--list').on('click', function () {
        $('.catalog__items').addClass('catalog__items--list');
        // $('.pagination').addClass('pagination__active');
        $('.pagination__list').addClass('pagination__list--active');
        document.querySelector('.page-top__title').innerHTML = "Product list 2";
        document.querySelector('.breadcrumbs__link--last').innerHTML = "Product list 2";
    });

    $('.catalog__btn--grid').on('click', function () {
        $('.catalog__items').removeClass('catalog__items--list');
        // $('.pagination').removeClass('pagination__active');
        $('.pagination__list').removeClass('pagination__list--active');
        document.querySelector('.page-top__title').innerHTML = "Product list 1";
        document.querySelector('.breadcrumbs__link--last').innerHTML = "Product list 1";
    });



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

    $('.specific__small').slick({
        asNavFor: '.specific__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false


    });

    $('.specific__big').slick({
        asNavFor: '.specific__small',
        // slidesToShow: 1,
        // slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true

    });


    $(function () {

        $(".catalog__star").rateYo({
            starWidth: "10px",
            spacing: "6px",
            normalFill: "#d6d6d6",
            ratedFill: "#ffcc00",
            readOnly: true
        });

        $(".product-card__star").rateYo({
            starWidth: "18px",
            spacing: "12px",
            normalFill: "#d6d6d6",
            ratedFill: "#ffcc00",
            readOnly: true
        });

        $(".specific__star").rateYo({
            starWidth: "18px",
            spacing: "12px",
            normalFill: "#d6d6d6",
            ratedFill: "#ffcc00",
            readOnly: true
        });

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

//fixed header

const header = document.querySelector('.header');
const headerWrap = document.querySelector('.header__wrap');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {

    let scrollTop = window.scrollY;
    let heightPart = headerWrap.offsetHeight;

    if (scrollTop > heightPart) {

        headerWrap.classList.add('header__wrap--fixed');
        // header.style.marginTop = heightPart + 'px';
        header.classList.add('header__fixed');
        nav.classList.add('nav__fixed');
    } else {
        headerWrap.classList.remove('header__wrap--fixed');
        // header.style.marginTop = '0px';
        header.classList.remove('header__fixed');
        nav.classList.remove('nav__fixed');
    }
});

//burger menu

let burger = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu__list');

burger.addEventListener('click', function () {
    burger.classList.toggle('menu__btn--active');
    menu.classList.toggle('menu__list--active');
});

//added button filter

let filterBtn = document.querySelector('.catalog__filter-btn');
let filter = document.querySelector('.catalog__filter');

filterBtn.addEventListener('click', function () {

    filter.classList.toggle('catalog__filter--active');

});