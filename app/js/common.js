
// Preloader
$(window).on('load', function () {
    $('#preloader').delay(1000).fadeOut(1000);
});

// Hamburger animation
$('.navbar-toggler').on('click', function () {
    $('#hamburger').toggleClass('is-active');
});


// Close mobile menu on click by menu item
$ ('.nav-link').on('click', function (){
    $('.navbar-collapse').removeClass('show');
    $a = $($(this).attr('href'));
    $('html,body').animate({ scrollTop: $a.offset().top -50}, 500);
    $('#hamburger').removeClass('is-active');
return false;
});


// Smooth scroll / Scroll To Top
$('a[href*="#"]').on('click', function(e){

    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top -50
    }, 1000);
    e.preventDefault();
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scroll-up').fadeIn();
    } else {
        $('.scroll-up').fadeOut();
    }
});