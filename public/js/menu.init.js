// Menu

var scroll = $(window).scrollTop();

$('.navbar-toggle').on('click', function(event) {
    $(this).toggleClass('open');
    $('#navigation').slideToggle(400);
});

$('.navigation-menu>li').slice(-2).addClass('last-elements');

$('.menu-arrow,.submenu-arrow').on('click', function(e) {
    if ($(window).width() < 992) {
        e.preventDefault();
        $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
    }
});