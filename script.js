/* =========================
   MENU TOGGLE
========================= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document
          .querySelector(`header nav a[href="#${id}"]`)
          .classList.add('active');
      });
    }
  });

  /* Sticky header */
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /* Close menu on scroll */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/* =========================
   TYPED JS
========================= */
const typed = new Typed('.multiple-text', {
  strings: ['Web Developer', 'UI/UX Designer', 'Freelancer'],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1000,
  loop: true
});

/* =========================
   SCROLL REVEAL
========================= */
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* =========================
   CONTACT FORM (DEMO)
========================= */
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent successfully! 🚀 (Demo)');
  form.reset();
});
