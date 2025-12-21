// script.js

// Contact Button Alert
function contactAlert() {
    alert("Vielen Dank für dein Interesse! Schreib mir einfach eine E-Mail 😊");
}

// Fade-in sections on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Button click animation
const button = document.querySelector('button');
button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.95)';
});
button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1.1)';
});

// Optional: Floating gradient background effect
const header = document.querySelector('header');
let angle = 0;
function animateHeaderGradient() {
    angle += 0.5;
    header.style.background = `linear-gradient(${angle}deg, #7c3aed, #22d3ee)`;
    requestAnimationFrame(animateHeaderGradient);
}
animateHeaderGradient();

