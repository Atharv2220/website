function contactAlert() {
    alert("Vielen Dank für dein Interesse! Schreib mir einfach eine E-Mail 😊");
}

/* Scroll Fade-In */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});

