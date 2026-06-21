// CAFFOTTO GLOBAL CONTROLLER (MPA VERSION)

// Highlight Active Nav Item
function highlightActiveNav() {
  const path = window.location.pathname;
  const page = path.split("/").pop() || 'index.html';
  
  const navLinks = document.querySelectorAll('nav.luxury-nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === 'index.html' && href === 'index.html')) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
}

// Theme Switcher (Dark/Light Luxury)
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('caffotto_theme') || 'dark';
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcon('light');
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    const activeTheme = isLight ? 'light' : 'dark';
    localStorage.setItem('caffotto_theme', activeTheme);
    updateThemeIcon(activeTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'light') {
    icon.setAttribute('data-lucide', 'moon');
  } else {
    icon.setAttribute('data-lucide', 'sun');
  }
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// PWA Service Worker Registration
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Caffotto PWA ServiceWorker Registered: ', reg.scope))
        .catch(err => console.log('Caffotto ServiceWorker registration failed: ', err));
    });
  }
}

// Mobile Menu Navigation Toggler
function initMobileMenu() {
  const trigger = document.querySelector('.menu-trigger');
  const nav = document.querySelector('.luxury-nav');
  if (trigger && nav) {
    trigger.addEventListener('click', () => {
      const isVisible = window.getComputedStyle(nav).display === 'flex';
      nav.style.display = isVisible ? 'none' : 'flex';
    });
  }
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  highlightActiveNav();

  if (window.initAnimations) window.initAnimations();
  if (window.initMenu) window.initMenu();
  if (window.initReservation) window.initReservation();
  if (window.initChatbot) window.initChatbot();
  
  initMobileMenu();
  registerServiceWorker();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});
