// how to use JQuery



// Document ready method

// $(document).ready(function () {
//     $('h1').slideUp(1000).slideDown(1000);

//     $("#main").css({
//         color: 'red',
//         fontSize:25
//     });

//     $(".main").css({
//         color: 'red',
//         fontSize:65
//     });
// });

// $(window).onabort("load", function() {

// })

/* Preloader */
$(window).on('load', function () { // makes sure the whole site is laoded;
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut(500);
});