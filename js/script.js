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
        navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>'],
        responsive: {
            // Breakpoint from 0 up
            0: {
                items: 1
            },
            // Breakpoint from 480 up
            480: {
                item: 2
            }

        }
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
$(function () {

    $("#services-tabs").responsiveTabs({

    });

});


// Isotope Filter Portfolio 

$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});
    // filter items by click buttons
    $("#isotope-filters").on('click', 'button', function () {
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
$(function () {
    $("#portfoil-wrapper").magnificPopup({
        delegate: 'a',
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


// Counter Jquery
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000,
        offset: 60
    });
})


// Clients Section Slide Jquery
$(document).ready(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 600,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>'],
        responsive: {
            // Breakpoint from 0 up
            0: {
                items: 2
            },
            // Breakpoint from 480 up
            480: {
                item: 3
            },
            768: {
                items: 6
            }

        }
    });
});


//Google Map JavaScript
$(window).on('load', function () {

    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLatlng = {
        lat: 40.712685,
        lng: -74.005920
    };
    var auCoordinatioin = {
        lat: -37.886276,
        lng: 145.082947
    }

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatlng,
        title: "Click To See Address"
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });
    //var marker = new google.maps.Marker({position: auCoordinatioin, map: map});

    // add info window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    })

    // marker click
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    google.maps.event.addDomListener(window, 'resize', function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });

})



// Navigation hide bar
// Show and hide white navigation

$(function () {

    showHideNav();

    $(window).scroll(function () {
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {

            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src", "./images/logo/logo-dark.png");

            // show back-to-top button
            $("#back-to-top").fadeIn();

        } else {

            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "./images/logo/logo.png");
            $("#back-to-top").fadeOut();
        }
    }

})

// Smooth Scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //get section id for different sections.
        var section_id = $(this).attr("href");

        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 50
        }, 1200, "easeInOutQuint");
    });
})

// Mobile Menu
$(function () {
    // Click open button, change the css style of the mobile-nav elements.
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

})


// WOW animation initialize
$(function(){
    new WOW().init();
})

$(window).on('load',function() {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
})