
$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.svg"></button>',
    dots: false,
    arrows: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(selector) {
    $(selector).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();

        const objectParent = $(this).closest(".catalog-item__wrapper");
        objectParent.find(".catalog-item__content").toggleClass('catalog-item__content_active');
        objectParent.find(".catalog-item__list").toggleClass('catalog-item__list_active');

        /* $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active'); */
      })
    });
  };
  
  toggleSlide('.catalog-item_link');
  toggleSlide('.catalog-item__back');

  //modal
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
/*   $('.button_small').on('click', function() {
    $('.overlay, #order').fadeIn('slow')
  }); */
  $('.button_small').each(function(i) {
    $(this).on('click', function() {
      $('.modal__descr').html($('.catalog-item__subtitle').eq(i).html());
      $('.overlay, #order').fadeIn('slow');
    })
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
  })
});