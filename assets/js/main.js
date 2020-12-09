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