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