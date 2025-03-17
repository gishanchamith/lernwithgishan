document.getElementById("searchButton").addEventListener("click", searchContent);

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50, // Adjust offset if needed
                    behavior: "smooth"
                });
            }
        });
    });
});

function toggleMenu() {
    let menu = document.querySelector('.nav-links');
    if (menu.classList.contains('active')) {
        menu.style.maxHeight = '0';
        setTimeout(() => menu.classList.remove('active'), 300);
    } else {
        menu.classList.add('active');
        menu.style.maxHeight = '500px';
    }
}

function searchContent() {
    let query = document.getElementById("searchBar").value.toLowerCase();
    let elements = document.body.querySelectorAll("*");

    if (query.trim() === "") {
        alert("කරුණාකර සෙවීම සඳහා වචනයක් ඇතුළත් කරන්න!");
        return;
    }

    let found = false;
    
    elements.forEach(element => {
        if (element.textContent.toLowerCase().includes(query)) {
            element.style.backgroundColor = "#FFFF00";
            element.style.transition = "background-color 0.5s ease";
            found = true;
        }
    });

    if (!found) {
        alert("ගැලපෙන විශේෂයක් හමු නොවිණි!");
    }
}



// Smooth Scrolling Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Navbar Shrinking on Scroll
window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.padding = "10px 30px";
        nav.style.background = "#3B82F6"; // Blue primary color
    } else {
        nav.style.padding = "15px 30px";
        nav.style.background = "#F7F7F7"; // Light gray background
    }
});

// Fade-in Effect for Sections
const sections = document.querySelectorAll("section");

const fadeInOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

// Search Functionality
function searchContent() {
    let query = document.getElementById("searchBar").value.toLowerCase();
    let paragraphs = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");

    if (query.trim() === "") {
        alert("කරුණාකර සෙවීම සඳහා වචනයක් ඇතුළත් කරන්න!");
        return;
    }

    let found = false;

    paragraphs.forEach(paragraph => {
        let text = paragraph.textContent;
        let regex = new RegExp(query, "gi");
        let highlightedText = text.replace(regex, match => {
            found = true;
            return `<span class="highlight">${match}</span>`;
        });

        paragraph.innerHTML = highlightedText;
    });

    if (!found) {
        alert("ගැලපෙන විශේෂයක් හමු නොවිණි!");
    }
}

// Add Event Listener to Search Bar
document.getElementById("searchButton").addEventListener("click", searchContent);
