// CAFFOTTO CINEMATIC ANIMATIONS

function initAnimations() {
  initParticles();
  initCustomCursor();
  initMagneticButtons();
  initScrollAnimations();
}

// 1. CANVAS GOLDEN PARTICLES (Ambient Effect)
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particlesArray = [];
  const numberOfParticles = 75;

  // Set canvas size
  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  setCanvasSize();
  window.addEventListener('resize', setCanvasSize);

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = Math.random() * 0.4 - 0.2;
      this.speedY = Math.random() * -0.5 - 0.1; // slow float upwards
      this.opacity = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap around screen
      if (this.y < 0) {
        this.y = canvas.height;
        this.x = Math.random() * canvas.width;
      }
      if (this.x < 0 || this.x > canvas.width) {
        this.speedX = -this.speedX;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#D4AF37';
      ctx.fill();
    }
  }

  function init() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }
  init();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// 2. CUSTOM CURSOR
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const cursorDot = document.getElementById('custom-cursor-dot');

  if (!cursor || !cursorDot) return;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Instantly move the tiny dot
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  // Smoothly interpolate the outer circle cursor position (luxury lag effect)
  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover states
  const interactables = document.querySelectorAll('a, button, .table-node, .gallery-item, .menu-filter-btn');
  interactables.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
      cursor.style.width = '45px';
      cursor.style.height = '45px';
      cursor.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
    });
    elem.addEventListener('mouseleave', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.backgroundColor = 'transparent';
    });
  });
}

// 3. MAGNETIC BUTTONS (Applies small physical draw on hover)
function initMagneticButtons() {
  const magneticBtns = document.querySelectorAll('.btn-premium, .floating-reserve-btn, .chatbot-trigger-btn');
  
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Pull button slightly toward mouse
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      // Return to origin
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

// 4. GSAP SCROLL-TRIGGERED REVEALS
function initScrollAnimations() {
  if (!window.gsap) return;

  const gsap = window.gsap;
  
  if (window.ScrollTrigger) {
    gsap.registerPlugin(window.ScrollTrigger);
  }

  // Fade-in elements on scroll
  const scrollReveals = document.querySelectorAll('.about-text, .about-img-container, .exp-block, .event-card, .tier-card, .tasting-menu-card, .blog-card');
  scrollReveals.forEach(elem => {
    gsap.fromTo(elem, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Text Reveal animations (splits headers in hero)
  gsap.fromTo('.hero-title',
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 1.8, ease: "power4.out", delay: 0.5 }
  );

  gsap.fromTo('.hero-sub',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.8 }
  );

  gsap.fromTo('.hero-actions',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 1.1 }
  );
}

// Expose globally
window.initAnimations = initAnimations;
