(() => {
  $(window).on('load', function () {
    const swiper = new Swiper('.breadcrumbs__container', {
      freeMode: true,
      slidesPerView: 'auto',
      breakpoints: {

        1280: {
          freeMode: true,
          slidesPerView: 'auto',
          allowTouchMove: false
        }
      }
    });

  });
})();
