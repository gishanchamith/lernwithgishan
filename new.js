// Service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('✅ Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('❌ Service Worker registration failed:', error);
      });
  });
}

// Spinner Loader fade-out
window.addEventListener('load', () => {
  const loader = document.querySelector('.spinner-container');
  if (loader) {
    loader.classList.add('is-hidden');
  }
});

// Live time clock
function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById('live-time');
  if (timeElement) {
    timeElement.textContent = now.toLocaleTimeString('en-GB', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }
}

setInterval(updateTime, 1000);
updateTime();

// Modern navigation (home page)
(function highlightHomeNav() {
  const navLinks = document.querySelectorAll('.home-nav__link[data-page]');
  if (!navLinks.length) return;

  let currentPath = window.location.pathname.split('/').pop();
  if (!currentPath) {
    currentPath = 'index.html';
  }

  navLinks.forEach((link) => {
    const page = link.getAttribute('data-page');
    if (page === currentPath) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('is-active');
      link.removeAttribute('aria-current');
    }
  });
})();

// Legacy pill navigation support for secondary pages
(function initLegacyNav() {
  const navContainer = document.querySelector('.pill-radio-container');
  if (!navContainer) return;

  const navMap = {
    'index.html': 'nav-home',
    'ol.html': 'nav-al1',
    'al.html': 'nav-al2',
    'pastpapers.html': 'nav-papers',
    '': 'nav-home',
  };

  const currentPath = window.location.pathname.split('/').pop();
  const targetId = navMap[currentPath] || 'nav-home';
  const activeInput = document.getElementById(targetId);
  if (activeInput) {
    activeInput.checked = true;
  }

  const navLabels = navContainer.querySelectorAll('label[data-link]');
  navLabels.forEach((label) => {
    label.addEventListener('click', () => {
      const link = label.getAttribute('data-link');
      if (link) {
        window.location.href = link;
      }
    });
  });
})();
