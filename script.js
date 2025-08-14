// ========================
// Mobile Menu Toggle
// ========================
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "&#9776;"; // hamburger icon
    nav.insertBefore(menuToggle, nav.firstChild);

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});

// ========================
// Smooth Scrolling for Same-Page Links
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

// ========================
// Contact Form Validation
// ========================
document.addEventListener("submit", function (e) {
    if (e.target.tagName.toLowerCase() === "form") {
        e.preventDefault();

        const name = e.target.querySelector('input[name="name"]').value.trim();
        const email = e.target.querySelector('input[name="email"]').value.trim();
        const message = e.target.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for contacting me, " + name + "!");
        e.target.reset();
    }
});
