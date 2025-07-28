// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// FAQ Accordion Toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');

    // Close others
    document.querySelectorAll('.faq-item').forEach(faq => {
      if (faq !== item) {
        faq.classList.remove('active');
      }
    });
  });
});

// Scroll Animations using IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
      observer.unobserve(entry.target); // Only once
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
