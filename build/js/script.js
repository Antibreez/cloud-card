"use strict";

(function () {
  $(window).on('load', function () {
    var swiper = new Swiper('.breadcrumbs__container', {
      freeMode: true,
      slidesPerView: 'auto',
      watchOverflow: true,
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

(function () {
  var $tabs = $('.device-details__tab');
  $tabs.click(function () {
    if (!$(this).hasClass('active')) {
      $tabs.removeClass('active');
      $(this).addClass('active');
    }
  });
})();

(function () {
  var swiper = new Swiper('.gallery__slider-container', {
    slidesPerView: 1,
    pagination: {
      el: '.gallery__slider-pagination',
      dynamicBullets: true
    },
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 15,
        navigation: {
          nextEl: '.gallery__slider-next',
          prevEl: '.gallery__slider-prev'
        },
        pagination: {
          el: null
        }
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 15,
        navigation: {
          nextEl: '.gallery__slider-next',
          prevEl: '.gallery__slider-prev'
        },
        pagination: {
          el: null
        }
      }
    }
  });
  var $slide = $('.gallery .swiper-slide');
  var $bigImg = $('.gallery__big-img  img');
  $slide.click(function () {
    if (!$(this).hasClass('active')) {
      $slide.removeClass('active');
      $(this).addClass('active');
      var src = $(this).children('img').attr('src');
      var alt = $(this).children('img').attr('alt');
      $bigImg.attr('src', src);
      $bigImg.attr('alt', alt);
      var $container = $(this).parents('.gallery__slider-container');
      var leftPosition = $(this).offset().left - $container.offset().left;
      var rightPosition = $container.width() - leftPosition - $(this).width();

      if (rightPosition < $(this).width()) {
        swiper.slideNext();
      }

      if (leftPosition < $(this).width()) {
        swiper.slidePrev();
      }
    }
  });
})();

(function () {
  var $btns = $('.device-chars__square-btn');
  $btns.click(function () {
    console.log('click');

    if (!$(this).hasClass('active')) {
      $btns.removeClass('active');
      $(this).addClass('active');
    }
  });
})();