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
        if ($(".item").hasClass("active")) {
            var act = $(".active p").text();
            $('.carousel-bottom-center p').text(act)
            }
// })

$('#btn-feature').click(function () {
    $('.feature-bottom').slideToggle();
})
