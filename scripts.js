document.addEventListener("DOMContentLoaded", function () {
    // Select all sections that should toggle in and out
    const sections = document.querySelectorAll(
        ".content-section, .education-section"
    );
    const heroSection = document.querySelector(".hero-section");
    const profileContainer = document.querySelector(".profile-container");
    const navbar = document.querySelector(".navbar");

    // Function to open a specific section
    function openSection(sectionId) {
        if (heroSection) heroSection.style.display = "none";
        if (profileContainer) profileContainer.style.display = "none";
        if (navbar) navbar.style.display = "none";

        sections.forEach((section) => {
            section.style.display = "none";
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = "block";
        }
    }

    // Function to close all sections and show hero again
    function closeSection() {
        if (heroSection) heroSection.style.display = "flex";
        if (profileContainer) profileContainer.style.display = "flex";
        if (navbar) navbar.style.display = "flex";

        sections.forEach((section) => {
            section.style.display = "none";
        });
    }

    // Attach click listener to all close buttons
    document.querySelectorAll(".close-btn").forEach((button) => {
        button.addEventListener("click", closeSection);
    });

    // Make functions accessible from HTML buttons
    window.openSection = openSection;
    window.closeSection = closeSection;
});
