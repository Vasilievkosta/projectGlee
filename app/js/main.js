$(function () {

    $('.specific__link').on('click', function (e) {

        e.preventDefault();

        $('.specific__link').removeClass('specific__link--active');
        $(this).addClass('specific__link--active');

        $('.specific__item').removeClass('specific__item--active');
        $($(this).attr('href')).addClass('specific__item--active');
    });

    $('.select-styler').styler();

    $('.specific__number').styler();

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

    $('.related__list').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        // responsive: [{
        //         breakpoint: 1439,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3
        //         }
        //     },
        //     {
        //         breakpoint: 1199,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 575,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
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
        $(".specific__star").rateYo({
            starWidth: "18px",
            spacing: "12px",
            normalFill: "#d6d6d6",
            ratedFill: "#ffcc00",
            readOnly: true,
            starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><path d="M 11.914062 4.695312 L 16.402344 5.359375 C 16.773438 5.414062 17.085938 5.675781 17.207031 6.035156 C 17.324219 6.398438 17.226562 6.789062 16.960938 7.058594 L 13.703125 10.253906 L 14.472656 14.835938 C 14.535156 15.210938 14.382812 15.589844 14.070312 15.8125 C 13.757812 16.035156 13.351562 16.0625 13.015625 15.882812 L 9.003906 13.742188 L 4.992188 15.882812 C 4.65625 16.0625 4.246094 16.035156 3.9375 15.8125 C 3.628906 15.589844 3.472656 15.210938 3.539062 14.835938 L 4.304688 10.253906 L 1.050781 7.058594 C 0.78125 6.789062 0.683594 6.398438 0.804688 6.035156 C 0.921875 5.675781 1.230469 5.414062 1.605469 5.359375 L 6.09375 4.695312 L 8.105469 0.5625 C 8.273438 0.21875 8.621094 0 9.003906 0 C 9.386719 0 9.738281 0.21875 9.902344 0.5625 Z M 11.914062 4.695312 " /></svg>'
        });

        $(".catalog__star").rateYo({
            starWidth: "10px",
            spacing: "6px",
            normalFill: "#d6d6d6",
            ratedFill: "#ffcc00",
            readOnly: true,
            starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><path d="M 11.914062 4.695312 L 16.402344 5.359375 C 16.773438 5.414062 17.085938 5.675781 17.207031 6.035156 C 17.324219 6.398438 17.226562 6.789062 16.960938 7.058594 L 13.703125 10.253906 L 14.472656 14.835938 C 14.535156 15.210938 14.382812 15.589844 14.070312 15.8125 C 13.757812 16.035156 13.351562 16.0625 13.015625 15.882812 L 9.003906 13.742188 L 4.992188 15.882812 C 4.65625 16.0625 4.246094 16.035156 3.9375 15.8125 C 3.628906 15.589844 3.472656 15.210938 3.539062 14.835938 L 4.304688 10.253906 L 1.050781 7.058594 C 0.78125 6.789062 0.683594 6.398438 0.804688 6.035156 C 0.921875 5.675781 1.230469 5.414062 1.605469 5.359375 L 6.09375 4.695312 L 8.105469 0.5625 C 8.273438 0.21875 8.621094 0 9.003906 0 C 9.386719 0 9.738281 0.21875 9.902344 0.5625 Z M 11.914062 4.695312 " /></svg>'
        });

        $(".product-card__star").rateYo({
            starWidth: "18px",
            spacing: "12px",
            normalFill: "#d6d6d6",
            ratedFill: "#ffcc00",
            readOnly: true,
            starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><path d="M 11.914062 4.695312 L 16.402344 5.359375 C 16.773438 5.414062 17.085938 5.675781 17.207031 6.035156 C 17.324219 6.398438 17.226562 6.789062 16.960938 7.058594 L 13.703125 10.253906 L 14.472656 14.835938 C 14.535156 15.210938 14.382812 15.589844 14.070312 15.8125 C 13.757812 16.035156 13.351562 16.0625 13.015625 15.882812 L 9.003906 13.742188 L 4.992188 15.882812 C 4.65625 16.0625 4.246094 16.035156 3.9375 15.8125 C 3.628906 15.589844 3.472656 15.210938 3.539062 14.835938 L 4.304688 10.253906 L 1.050781 7.058594 C 0.78125 6.789062 0.683594 6.398438 0.804688 6.035156 C 0.921875 5.675781 1.230469 5.414062 1.605469 5.359375 L 6.09375 4.695312 L 8.105469 0.5625 C 8.273438 0.21875 8.621094 0 9.003906 0 C 9.386719 0 9.738281 0.21875 9.902344 0.5625 Z M 11.914062 4.695312 " /></svg>'
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