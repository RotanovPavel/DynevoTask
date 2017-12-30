//=require ../../bower_components/jquery/dist/jquery.js
//=require ../../bower_components/bootstrap/dist/js/bootstrap.js
//=require ../../node_modules/lazyload/lazyload.js


$('#btn-top').click(function () {
    if ($(".navbar-ex2-collapse").hasClass("in")) {
        $('#ex-2').removeClass('in');
    }
});

$('#btn-middle').click(function () {
    if ($(".navbar-ex1-collapse").hasClass("in")) {
        $('#ex-1').removeClass('in');
    }
});




$('#myCarousel').on('slide.bs.carousel', function () {
    var act = $(".active p").text();
    $('.carousel-bottom-center p').text(act);
    $('.carousel-bottom-center p').hide();
    $('.carousel-bottom-center p').fadeToggle(1500);
});


$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000
        },
        scrollbar: {
            el: '.swiper-scrollbar'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

});
// $(document).ready(function () {
//     $("div.lazy").lazyload({
//         effect: "fadeIn"
//     });
// });
