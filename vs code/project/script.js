document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevArrow = document.querySelector(".arrow.prev");
    const nextArrow = document.querySelector(".arrow.next");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    prevArrow.addEventListener("click", prevSlide);
    nextArrow.addEventListener("click", nextSlide);

    // Automatic slide change every 3 seconds
    setInterval(nextSlide, 3000);

    // Initially show the first slide
    showSlide(currentIndex);
});
