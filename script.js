// Fade-in animation on scroll using Intersection Observer
const faders = document.querySelectorAll('.fade-in-section');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(section => {
  appearOnScroll.observe(section);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById('particles-js');
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size between 3px and 8px
    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random animation duration and delay
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
    
    particlesContainer.appendChild(particle);
  }
}

// Navbar background change on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15, 12, 41, 0.9)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.8)';
  } else {
    navbar.style.background = 'linear-gradient(90deg, #0f0c29, #302b63, #24243e)';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.7)';
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  createParticles();
});