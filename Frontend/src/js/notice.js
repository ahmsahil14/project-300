document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const shortContent = document.querySelector('.short-content');
    const fullContent = document.querySelector('.full-content');

    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function () {
            shortContent.style.display = 'none';
            fullContent.style.display = 'block';
        });
    }
});
