/* Theme Name: Steix - Responsive Landing Page Template
   Author: Themesbrand
   Version: 1.0.0
   File Description: Main JS file of the template
*/

$(function() {

    "use strict";

    // Sticky Header
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 40) {
            $(".sticky").addClass("darkheader");
        } else {
            $(".sticky").removeClass("darkheader");
        }
    });

    // Magnific Popup
    $('.video-play-icon').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    // Smoth link
    $('.navigation-menu a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Scrollspy
    $("#navigation").scrollspy({
        offset: 50
    });
});