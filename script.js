let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
const header = document.querySelector('.header');
const logo = document.querySelector('.header .logo'); // Select the logo element

// Toggle navbar menu for mobile view
menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

// Close navbar menu on scroll
window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   // Adjust background transparency on scroll
   const maxScroll = 200; // Change this to control when the transparency effect begins
   let opacity = 1 - window.scrollY / maxScroll;
   opacity = Math.max(opacity, 0); // Ensure opacity doesn't go below 0

   // Set header background transparency
   header.style.backgroundColor = `rgba(255, 250, 250, ${opacity})`; // Using light background color with fading opacity
   header.style.boxShadow = opacity < 0.1 ? 'none' : '0 4px 8px rgba(0, 0, 0, 0.1)'; // Hide shadow as it becomes transparent

   // Adjust logo opacity
   logo.style.opacity = opacity; // Make the logo disappear
};

// Swiper slider for home section
var swiperHome = new Swiper(".home-slider", {
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 6000,
      disableOnInteraction: false,
   },
});

var swiperHome = new Swiper(".homeindex-slider", {
   loop: false,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
});

// Swiper slider for reviews section
var swiperReviews = new Swiper(".reviews-slider", {
   grabCursor: true,
   loop: true,
   autoHeight: true,
   spaceBetween: 20,
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      700: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      },
   },
});

// Load more packages functionality
let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () => {
   let boxes = document.querySelectorAll('.packages .box-container .box');
   for (let i = currentItem; i < currentItem + 3 && i < boxes.length; i++) {
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 3;
   if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = 'none';
   }
};
