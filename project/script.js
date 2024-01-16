let slideIndex = 0;
let slideshowActive = true;
let slideshowTimeout;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => plusDivs(-1));
nextButton.addEventListener('click', () => plusDivs(1));

function plusDivs(n) {
    clearTimeout(slideshowTimeout);
    showDivs((slideIndex -= n));
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

        slideshowTimeout = setTimeout(showSlides, 2000);
    }
}

showSlides();

function openModal(src, alt, caption) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var modalCaption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = src;
    modalImg.alt = alt;
    modalCaption.innerHTML = caption;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slides = document.querySelectorAll('.mySlides');
slides.forEach(function (slide, index) {
    slide.addEventListener('click', function () {
        var imageSrc = this.querySelector('img').src;
        var imageAlt = this.querySelector('img').alt;
        var captionText = this.querySelector('#text h3').innerText + ": " + this.querySelector('#text p').innerText;
        openModal(imageSrc, imageAlt, captionText);
    });
});


      
