const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

const observerOptions = {
    root: null,
    threshold: 0.6
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove("ativo"));
            const activeId = entry.target.getAttribute("id");
            const activeLink = document.querySelector(`.menu a[href="#${activeId}"]`);
            if (activeLink) {
                activeLink.classList.add("ativo");
            }
        }
    });
}, observerOptions);

sections.forEach((section) => {
    observer.observe(section);
});