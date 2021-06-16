(function() {
  const $aboutBtn = $('.device-details__about-btn');
  const $close = $('.tooltip__close');

  function getTopPosition($el) {
    return $el.offset().top - window.scrollY;
  };

  function getBottomPosition($el) {
    return window.scrollY + $(window).height() - $el.offset().top - $el.height();
  }

  $aboutBtn.on('click', function() {
    $(this).next().addClass('js-show');

    $('.tooltip.js-show').each(function() {
      if (
        getTopPosition($(this)) < 0
      ) {
        $(this).removeClass('top');
        $(this).addClass('bottom');
      }

      if (
        getBottomPosition($(this)) < 0
      ) {
        $(this).removeClass('bottom');
        $(this).addClass('top');
      }
    });
  });

  $close.on('click', function() {
    $(this).parent().removeClass('js-show');
  });

  $(window).on('scroll', function() {
    $('.tooltip.js-show').each(function() {
      if (
        getTopPosition($(this)) < 0
      ) {
        $(this).removeClass('top');
        $(this).addClass('bottom');
      }

      if (
        getBottomPosition($(this)) < 0
      ) {
        $(this).removeClass('bottom');
        $(this).addClass('top');
      }
    });
  })

  console.log($aboutBtn);
})();
