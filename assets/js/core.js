// Header Scroll
let nav = document.querySelector('.navbar');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('header-scrolled');
    }
    else {
        nav.classList.remove('header-scrolled');
    }
}


// Owl Carousel
$(document).ready(function() {
    $('.client-slider-section').owlCarousel({
        items: 4,
        loop:true,
        nav: false,
        autoplay: true,
        autoplayTimeoute: 2000,
        autoplayHoverPause: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
});


// Nav hide
let nvaBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

nvaBar.forEach(function(a) {
    a.addEventListener('click', function(){
        navCollapse.classList.remove('show');
    });
});