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


// Team Section Owl Crouse
$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 600,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>']
    });
});

// Progress Bar
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });
});

// Scroll down animation of WayPoints



// Responsive Tabs
$(function() {

    $("#services-tabs").responsiveTabs({
        
    });

});


// Isotope Filter Portfolio 

$(window).on('load', function(){

    // Initialize Isotope
    $("#isotope-container").isotope({
    });
    // filter items by click buttons
    $("#isotope-filters").on('click','button', function(){
        //get filter-value
        var filterValue = $(this).attr('data-filter');
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');

    });
});

// Magnifier
$(function(){
    $("#portfoil-wrapper").magnificPopup({
        delegate:'a',
        type: 'image',
        gallery: {
            enabled: 'true'
        }
        // other options
      });
});


// Testimonial Section OwlCarousel Slider
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 600,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>']
    });
});