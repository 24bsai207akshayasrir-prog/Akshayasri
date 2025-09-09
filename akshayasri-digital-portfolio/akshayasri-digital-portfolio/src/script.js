// Smooth scroll for "View My Work"
document.querySelector('.btn[href="#projects"]')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

// Contact Form Submission
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  message.textContent = "Thanks for contacting me! Your message has been received.";
  message.style.color = "green";
  form.reset();
});