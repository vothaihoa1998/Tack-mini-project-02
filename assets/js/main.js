$('.dropdown').on('click', function(e) {
    var target = $(e.target);
    var dropdown = target.closest('.dropdown');
    return !dropdown.hasClass('open') || !target.hasClass('dropdown-menu__search__input');
});

$('.search-button').click(function(){
    $(this).parent().toggleClass('open');
  });

  $(document).ready(function(){
    $('.banner-slick').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnDotsHover:true,
        autoplaySpeed:1000,
        dots: true,
        arrows: false,
        infinite: true
    });
});

$(window).on('scroll', function() {
    if ($(this).scrollTop() >= $('.header-scroll').height()) {
      $('.header-scroll').addClass('header--scrolled');
    } else {
      $('.header-scroll').removeClass('header--scrolled');
    }
});




$('.container__menu').click(function(){
   $(".container__wrap").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});