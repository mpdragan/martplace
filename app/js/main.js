$(function(){

    $('.weekly-slider__inner').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.feed-slider__inner-box').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    var mixer = mixitup('.products__inner-box');



});