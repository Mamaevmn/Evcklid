window.addEventListener('DOMContentLoaded', function() {
  // const slider = document.querySelector('.swiper-container');
  let swiper = new Swiper('.swiper-container', {
    height: 650,
    grabCursor: true,
    loop: true,
    simulateTouch: true,
    autoplay: {
      delay: 2500,
    },
    autoHeight: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: 'fade',
  });
});
