(function () {
  'use strict';

  $('html, body, section').animate({
    scrollTop: $(document).height(),
  });

  // hapus scrollbars
  document.documentElement.style.overflow = 'hidden';

  const checkscreen = () => {
    window.innerWidth < 992
      ? $('body').addClass('mobile')
      : $('body').removeClass('mobile');
  };
  var s = $('section'),
    c = $('.container'),
    hs = new HorizontalScroll.default({
      blocks: s,
      container: c,
      isAnimated: true,
      skewReducer: 35,
    }),
    r = gsap.timeline();
  r.from('header a,header p', { xPercent: -20, opacity: 0, duration: 1.2 });
  r.from('.dc__text h1,.dc__text p,.dc__text,button', {
    xPercent: -10,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
  }).from('#dc img', {
    xPercent: -10,
    opacity: 0,
    stagger: 0.2,
    // duration: 1,
  });

  window.addEventListener('load', checkscreen);
  window.addEventListener('resize', checkscreen);
})();
