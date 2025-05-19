if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        console.log('✅ Service Worker registered!', reg);
      })
      .catch(err => {
        console.error('❌ Service Worker registration failed:', err);
      });
  });
}




// Spinner Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".spinner-container");
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  });
  
// ===== Pill Navigation Active Indicator =====

// Get the current page filename (e.g., "index.html")
const currentPath = window.location.pathname.split("/").pop();
const fullURL = window.location.href;

// Map filenames to corresponding input IDs
const navMap = {
  "index.html": "nav-home",
  "ol.html": "nav-al1",
  "al.html": "nav-al2",
  "pastpapers.html": "nav-papers",
  "": "nav-home",  // For root domain without filename
};

// Special case: external portfolio link (detect if URL contains "gishan-portfolio")
let activeNavId = navMap[currentPath] || "nav-home";
if (fullURL.includes("gishan-portfolio")) {
  activeNavId = "nav-about";
}

// Programmatically check the matching radio input
const activeInput = document.getElementById(activeNavId);
if (activeInput) {
  activeInput.checked = true;
}

// ===== Handle clicking nav labels (redirect) =====
const navLabels = document.querySelectorAll(".pill-radio-container label");
navLabels.forEach(label => {
  label.addEventListener("click", () => {
    const link = label.getAttribute("data-link");
    if (link) window.location.href = link;
  });
});

  
  // Live Time Clock
  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-GB', { hour12: false });
    document.getElementById("live-time").textContent = timeString;
  }
  
  setInterval(updateTime, 1000);
  updateTime();
  if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}
