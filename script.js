// Menyimpan referensi elemen
let menu = document.querySelector('#menu-btn'); //Elemen ini digunakan untuk tombol menu pada tampilan mobile.
let navbar = document.querySelector('.header .navbar'); //yang merujuk ke navbar yang ada di header.
const header = document.querySelector('.header'); //Menyimpan referensi ke elemen .header .logo, yang digunakan untuk menangani logo.
const logo = document.querySelector('.header .logo'); // Elemen logo
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

// Toggle navbar menu untuk tampilan mobile
menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

// Menutup navbar menu saat scroll
window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

// Slider Swiper untuk bagian home-slider
var swiperHome = new Swiper(".home-slider", {
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },
});

// Slider Swiper untuk bagian homeindex-slider
var swiperHomeIndex = new Swiper(".homeindex-slider", {
   // Konfigurasi tambahan untuk slider
});

// Fungsi untuk menangani scroll dan menambahkan animasi pada elemen
const handleScroll = () => {
   const isMobile = window.innerWidth <= 768;  // Sesuaikan breakpoint untuk mobile
   animateOnScrollElements.forEach(el => {
       const rect = el.getBoundingClientRect();// Mengambil posisi elemen relatif terhadap viewport (layar) saat ini.
       const offset = isMobile ? 50 : 100;  // Jarak offset untuk mobile
       if (rect.top <= window.innerHeight - offset) { 
           el.classList.add('active');
           //Memeriksa apakah elemen sudah cukup dekat dengan bagian bawah layar. Jika iya, animasi (kelas active) akan ditambahkan pada elemen tersebut.
       }
   });
};

// Memicu event saat halaman dimuat dan saat scroll
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Menyimpan referensi tombol untuk toggle dark mode
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

// Mengecek apakah dark mode sudah diaktifkan sebelumnya
if (localStorage.getItem('darkMode') === 'enabled') {
   document.body.classList.add('dark-mode');
}

// Event listener untuk ikon bulan
toggleDarkModeButton.addEventListener('click', () => {
   document.body.classList.toggle('dark-mode');
   
   // Menyimpan preferensi pengguna
   if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      toggleDarkModeButton.src = 'sun-icon.png'; // Ganti ikon menjadi matahari
   } else {
      localStorage.setItem('darkMode', 'disabled');
      toggleDarkModeButton.src = 'moon-icon.png'; // Ganti ikon kembali ke bulan
   }
});