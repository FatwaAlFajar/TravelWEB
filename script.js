let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
const header = document.querySelector('.header');
const logo = document.querySelector('.header .logo'); // Select the logo element
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

// Toggle navbar menu for mobile view
menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

// Close navbar menu on scroll
window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

// Swiper slider for other section
var swiperHome = new Swiper(".home-slider", {
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 4000,
      disableOnInteraction: true,
   },
});

// Swiper slider for home section
var swiperHome = new Swiper(".homeindex-slider", {});

const handleScroll = () => {
   animateOnScrollElements.forEach(el => {
       const rect = el.getBoundingClientRect();
       if (rect.top <= window.innerHeight - 100) {
           el.classList.add('active');
       }
   });
};

// Trigger saat halaman dimuat dan saat scroll
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
