$(function(){
    /**menu-fix**/
    let menu = $('.navbar').offset().top;
    $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        if(menu < scroll){
            $('.navbar').addClass('menu-fix');
        } else{
            $('.navbar').removeClass('menu-fix');
        }
    });
    /**banner-slider**/
    $('.main-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        arrows: false,
    });

    // bt_top
    $('.bt-up').click(function () {
    $('html, body').animate({
      scrollTop: 0,
        }, 1500);
    });
  
    $(window).scroll(function () {
        let abc = $(this).scrollTop();
  
        if (abc > 200) {
            $('.bt-up').fadeIn();
        } else {
            $('.bt-up').fadeOut();
        }
    });
})

// venobox-portfolio
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

// wow-js
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
})
wow.init();