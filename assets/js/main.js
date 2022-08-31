var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    autoplay: true,
    speed: 1000,
    delay: 1000,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
  });