const swiperTop = new Swiper('.top-slider', {
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperAbout = new Swiper('.about-slider', {
  slidesPerView: 3.45,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.querySelectorAll('.accordeon-trigger').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordeon-item-active');
  });
});

const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const headline = document.querySelector('.headline');
const about = document.querySelector('.about');
const accordeon = document.querySelector('.accordeon');
const products = document.querySelector('.products');
const video = document.querySelector('.video');
const footer = document.querySelector('.footer');

btn.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
  headline.classList.toggle('hidden');
  about.classList.toggle('hidden');
  accordeon.classList.toggle('hidden');
  products.classList.toggle('hidden');
  video.classList.toggle('hidden');
  footer.classList.toggle('hidden');
});
