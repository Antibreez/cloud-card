(function() {
  const $btns = $('.device-chars__square-btn');

  $btns.click(function() {
    console.log('click');
    if (!$(this).hasClass('active')) {
      $btns.removeClass('active');
      $(this).addClass('active');
    }
  });
})();
