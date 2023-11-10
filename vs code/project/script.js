
    let slideIndex = 0;
    let slideshowActive = true; // Flag to track slideshow activity
    let slideshowTimeout;

    // Add event listener to make image fullscreen
    const images = document.querySelectorAll('.mySlides img');
    images.forEach(image => {
        image.addEventListener('click', toggleFullscreen);
    });

    // Manual control buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', () => plusDivs(-1));
    nextButton.addEventListener('click', () => plusDivs(1));

    function toggleFullscreen() {
        const image = this;
        const isFullscreen = image.classList.toggle('fullscreen');
        document.body.style.overflow = isFullscreen ? 'hidden' : 'auto';

        // Pause or resume the slideshow based on fullscreen mode
        slideshowActive = !isFullscreen;
        if (slideshowActive) {
            showSlides();
        } else {
            clearTimeout(slideshowTimeout);
        }
    }

    // Exit fullscreen when clicking outside the image
    document.addEventListener('click', exitFullscreen);

    function exitFullscreen(event) {
        const fullscreenImage = document.querySelector('.fullscreen');
        if (fullscreenImage && !fullscreenImage.contains(event.target)) {
            fullscreenImage.classList.remove('fullscreen');
            document.body.style.overflow = 'auto';
            slideshowActive = true;
            showSlides(); // Resume slideshow after exiting fullscreen
        }
    }

    // Manual control functions
    function plusDivs(n) {
        clearTimeout(slideshowTimeout);
        showDivs((slideIndex -= n));
        // Start automatic slideshow after manual control
        slideshowTimeout = setTimeout(showSlides, 2000);
    }

    function showDivs(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // Automatic slideshow
    function showSlides() {
        if (slideshowActive) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;

            if (slideIndex > slides.length) {
                slideIndex = 1;
            }

            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";

            // Reset the timeout for automatic slideshow
            slideshowTimeout = setTimeout(showSlides, 2000);
        }
    }

    // Initial call to start the slideshow
    showSlides();

