document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const container = document.querySelector(".container");

    // Initially hide the container and show the loader
    container.classList.remove("visible");
    loader.classList.remove("hidden");

    // Hide the loader and show the content after a delay
    setTimeout(() => {
        loader.classList.add("hidden");
        container.classList.add("visible");
    }, 2000); // 2-second delay
});