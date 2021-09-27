
//Comic slider New Arrivals
//function initSlider() {
//    if ($('.arrivals_slider').length) {
 //       var slider1 = $('.arrivals_slider');

//        slider1.owlCarousel({
//            loop: false,
//            dots: false,
//            nav: false,
//            responsive:
//            {
//                0: { item: 1 },
//                480: { item: 2 },
 //               768: { item: 3 },
//                991: { item: 4 },
//                1280: { item: 5 },
//                1440: { item: 5 },
//            }
//        });
//        if ($('.product_slider_nav_left').length) {
//            $('.product_slider_nav_left').on('click', function () {
 //               slider1.trigger('prev.owl.carousel');
 //           });
 //       }
 //       if ($('.product_slider_nav_right').length) {
 //           $('.product_slider_nav_right').on('click', function () {
 //               slider1.trigger('next.owl.carousel');
 //           });
 //       }
 //   }
//}

$(document).ready(function() {
    $("#arrivals-slider").owlCarousel(
        {
            loop:true,
            margin:20,
            autoplay:true,
            nav:true,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        }
    )
});