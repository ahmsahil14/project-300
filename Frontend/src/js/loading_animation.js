document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const body = document.body;

    // Initially hide the content and show the loader
    body.classList.remove("content-visible");
    loader.classList.remove("hidden");

    // Hide the loader and show the content after a delay
    setTimeout(() => {
        loader.classList.add("hidden");
        body.classList.add("content-visible");
    }, 2500); // Increased delay for more prominent animation
});
