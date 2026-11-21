// ======================================
// RESPONSIVE NAVIGATION
// ======================================

const siteHeader = document.querySelector("header");
const menuToggle = siteHeader && siteHeader.querySelector(".menu-toggle");

if (siteHeader && menuToggle) {
    const setMenuOpen = (isOpen) => {
        siteHeader.classList.toggle("menu-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    };

    menuToggle.addEventListener("click", () => {
        setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    siteHeader.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
            setMenuOpen(false);
            menuToggle.focus();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 850) {
            setMenuOpen(false);
        }
    });
}

// ======================================
// FAQ ACCORDION
// ======================================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        document.querySelectorAll(".faq-answer").forEach(item => {
            if (item !== answer) {
                item.style.display = "none";
            }
        });

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });
});

// ======================================
// STICKY HEADER SHADOW
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "none";
    }

});

// ======================================
// ACTIVE NAVIGATION LINK
// ======================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    if (link.href === window.location.href) {
        link.style.color = "#C56F80";
        link.style.fontWeight = "600";
    }

});

// ======================================
// SCROLL ANIMATION
// ======================================

const sections = document.querySelectorAll(
    ".service-card, .feature, .industry-card, .faq-item"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});

// ======================================
// SCROLL TO TOP ON PAGE LOAD
// ======================================

window.onload = () => {
    window.scrollTo(0, 0);
};

// ======================================
// CONSOLE MESSAGE
// ======================================

console.log("KBNR Website Loaded Successfully.");

    const form = document.getElementById("quoteForm");
    const status = document.getElementById("formStatus");
    const submitButton = document.getElementById("submitButton");

    if (form) form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const formData = Object.fromEntries(new FormData(form).entries());

      // TODO: Send formData to your backend, CRM, or approved form service.
      // No data is transmitted by this starter file.
      console.log("Quote request preview:", formData);

      status.textContent = "Form validated. Connect a submission endpoint to receive quote requests.";
      status.className = "status success";
      submitButton.textContent = "Request validated";
    });
