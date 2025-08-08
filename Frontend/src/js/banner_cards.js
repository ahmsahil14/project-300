document.addEventListener("DOMContentLoaded", function() {
    const admissionBanner = document.getElementById("admission-banner");
    const convocationBanner = document.getElementById("convocation-banner");

    const closeButtons = document.querySelectorAll(".close-banner");

    // Function to show a banner
    function showBanner(banner) {
        banner.classList.add("show");
    }

    // Show banners immediately
    showBanner(admissionBanner);
    showBanner(convocationBanner);

    // Add event listeners to close buttons
    closeButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.closest(".banner-card").style.display = "none"; // Hide the banner
        });
    });
});