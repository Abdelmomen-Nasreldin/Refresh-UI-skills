$(function() {

	if ( $('.owl-carousel-deals').length > 0 ) {
        $('.owl-carousel-deals').owlCarousel({
            autoplayHoverPause: true,
            autoplaySpeed: 500,
            smartSpeed: 500,
            autoplay: true,
            items:4,
            nav: true,
            dots: true,
            loop: true,
            pauseOnHover: true,
            responsive:{
                0:{
                    margin: 20,
                    nav: false,
                    items: 1
                },
                768:{
                    margin: 20,
                    nav: true,
                    items: 2
                },
                1000:{  
                    margin: 20,
                  nav: true,
                  items: 3
                },
                1280:{
                    margin: 20,
                    nav: true,
                    items: 4
                },
                1500:{
                    margin: 20,
                    nav: true,
                    items: 5
                },
            }
        });            
    }
	if ( $('.owl-carousel-blog ').length > 0 ) {
        $('.owl-carousel-blog ').owlCarousel({
          //  center:false,
            
            // smartSpeed: 500,
            // autoplay: true,
            items:3,
            nav: true,
            dots: true,
            loop: true,
            pauseOnHover: true,
            responsive:{
                0:{
                    margin: 20,
                    nav: false,
                    items: 1
                },
                768:{
                    margin: 20,
                    nav: false,
                    items: 2
                },
                1000:{  
                    margin: 20,
                  nav: false,
                  items: 3
                },
                1280:{
                    margin: 20,
                    nav: false,
                    items: 3
                },
                1500:{
                    margin: 20,
                    nav: true,
                    items: 3
                },
            }
        });            
    }

})