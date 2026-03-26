// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 20) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// SMOOTH SCROLL
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});