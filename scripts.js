document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content-section");
    const heroSection = document.querySelector(".hero-section");
    const profileContainer = document.querySelector(".profile-container");
    const navbar = document.querySelector(".navbar");

    // Function to open a section
    function openSection(sectionId) {
        if (heroSection) heroSection.style.display = "none";
        if (profileContainer) profileContainer.style.display = "none";
        if (navbar) navbar.style.display = "none";

        sections.forEach((section) => section.style.display = "none");

        const targetSection = document.getElementById(sectionId);
        if (targetSection) targetSection.style.display = "block";
    }

    // Function to close sections and return to the hero section
    function closeSection() {
        if (heroSection) heroSection.style.display = "flex";
        if (profileContainer) profileContainer.style.display = "flex";
        if (navbar) navbar.style.display = "flex";

        sections.forEach((section) => section.style.display = "none");
    }

    // Attach event listeners to close buttons
    document.querySelectorAll(".close-btn").forEach((button) => {
        button.addEventListener("click", closeSection);
    });

    // ✅ Attach functions to the global window object
    window.openSection = openSection;
    window.closeSection = closeSection;
});
