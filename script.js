// Toggle Mobile Menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Change Navbar on Scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if(window.scrollY > 50){
    header.style.background = '#111';
  } else {
    header.style.background = 'transparent';
  }
});

// Contact Form Dummy Submit
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for contacting me! 🚀');
  contactForm.reset();
});