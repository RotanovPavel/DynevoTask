//=require ../../bower_components/jquery/dist/jquery.js
//=require ../../bower_components/bootstrap/dist/js/bootstrap.js

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


// var arrList = $('.carousel-inner .item p').map(function(){
//     return $(this).attr('p');
// }).get();
    // $('.carousel-inner p').each(function (key, value) {

$('#myCarousel').on('slid.bs.carousel', function () {
    var act = $(".active p").text();
    $('.carousel-bottom-center p').text(act);
    $('.carousel-bottom-center p').hide();
    $('.carousel-bottom-center p').fadeToggle(1500);
});


// })

// $('#btn-feature').click(function () {
//     $('.feature-bottom').slideToggle();
// })


$('.multi-item-carousel').carousel({
    interval: 5000
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
});