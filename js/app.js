const mainFirstSwiper = new Swiper('.main-swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.main-swiper__pagination',
    clickable: true,
  },
  // autoplay: {
  // disableOnInteraction: false,
  // },
});

$('.menu__list__item').each(function () {
  $(this).on('mouseover', (el) => {
    $('.menu__list__item').removeClass('menu__list__item--active');
    this.classList.add('menu__list__item--active');
    if (el.target.dataset.image) {
      $('.menu__image').attr('src', `${el.target.dataset.image}`);
    }
  });
});
