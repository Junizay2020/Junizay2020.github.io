// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 20) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
// Navbar scroll effect
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// SMOOTH SCROLL
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show");
    document.querySelector(".hamburger").classList.toggle("active");
}

function closeMenu() {
    document.getElementById("nav-menu").classList.remove("show");
}