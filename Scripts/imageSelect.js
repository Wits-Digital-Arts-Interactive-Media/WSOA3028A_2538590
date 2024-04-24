function showSlide(slideId, slideIndex) {
    const slides = document.querySelectorAll(`#${slideId} img`);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = i === slideIndex ? 'block' : 'none';
    }
}

function next(slideId) {
    const slides = document.querySelectorAll(`#${slideId} img`);
    let currentSlide = getCurrentSlideIndex(slides);
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(slideId, currentSlide);
}

function previous(slideId) {
    const slides = document.querySelectorAll(`#${slideId} img`);
    let currentSlide = getCurrentSlideIndex(slides);
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(slideId, currentSlide);
}

function getCurrentSlideIndex(slides) {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].style.display === 'block') {
            return i;
        }
    }
    return 0;
}

showSlide('graphicSlide', 0);
showSlide('interiorSlide', 0);
